import axios, { AxiosInstance } from 'axios';
import { from } from 'rxjs';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f0d38df289e375ebbc8c140673430068',
    language: 'en-US',
  },
});
const apitoobj = (apiinstance: AxiosInstance) => (type: string) =>
  apiinstance.get(type).then(({ data }) => ({ type, results: data.results }));
const apiChangeresult = apitoobj(api);

export const moviesApiObservable = {
  nowPlaying: () => from(apiChangeresult('movie/now_playing')),
  upcoming: () => from(apiChangeresult('movie/upcoming')),
  popular: () => from(apiChangeresult('movie/popular')),
  movieDetail: id => from(api.get(`movie/${id}`)),
  search: term =>
    from(
      api.get(`search/movie`, {
        params: {
          query: encodeURIComponent(term),
        },
      })
    ),
};

export const tvApiObservable = {
  topRated: () => from(api.get('tv/top_rated')),
  popular: () => from(api.get('tv/popular')),
  airingToday: () => from(api.get('tv/airing_today')),
  showDetail: id =>
    from(
      api.get(`tv/${id}`, {
        params: {
          append_to_response: 'videos',
        },
      })
    ),
  search: term =>
    from(
      api.get(`search/tv`, {
        params: {
          query: encodeURIComponent(term),
        },
      })
    ),
};
