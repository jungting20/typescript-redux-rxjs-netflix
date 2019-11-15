import { ofType, Epic } from 'redux-observable';
import { switchMap, tap, map, mapTo, bufferCount } from 'rxjs/operators';
import { moviesApiObservable } from '../../apiObserbable';
import { merge, Observable } from 'rxjs';

const mergeObservableToObj = (
  ...observable: Array<Observable<{ type: string; results: any }>>
) => {
  const length = observable.length;
  return merge(...observable).pipe(
    bufferCount(length),
    map(array =>
      array.reduce((a, b) => ({ ...a, [b.type.split('/')[1]]: b.results }), {})
    )
  );
};

export enum HomeActionEnum {
  GET_TEST = 'home/TEST',
  GET_NOWPLAYING = 'home/GET_NOWPLAYING',
  GET_UPCOMING = 'home/GET_UPCOMING',
  GET_POPULAR = 'home/GET_POPULAR',
  GET_TOTALMOVIE = 'home/GET_TOTALMOVIE',
  SET_NOWPLAYING = 'home/SET_NOWPLAYING',
  SET_UPCOMING = 'home/SET_UPCOMING',
  SET_POPULAR = 'home/SET_POPULAR',
  SET_TOTALMOVIE = 'home/SET_TOTALMOVIE',
  SHOW_LOADING = 'home/SHOW_LOADING',
}

export const HomeActions = {
  get_test: () => ({ type: HomeActionEnum.GET_TEST }),
  get_nowplaying: () => ({
    type: HomeActionEnum.GET_NOWPLAYING,
  }),
  get_upcoming: () => ({
    type: HomeActionEnum.GET_UPCOMING,
  }),
  get_popular: () => ({
    type: HomeActionEnum.GET_POPULAR,
  }),
  get_total: () => ({
    type: HomeActionEnum.GET_TOTALMOVIE,
  }),
  set_total: (payload: any) => ({
    type: HomeActionEnum.SET_TOTALMOVIE,
    payload,
  }),
};
export const getAllMovieEpic: Epic = actions$ =>
  actions$.pipe(
    ofType(HomeActionEnum.GET_TOTALMOVIE),
    switchMap(() =>
      mergeObservableToObj(
        moviesApiObservable.nowPlaying(),
        moviesApiObservable.popular(),
        moviesApiObservable.upcoming()
      )
    ),
    map(a => HomeActions.set_total(a))
  );

type HomeActionType = {
  type: string;
  payload: {
    now_playing: ApiType.Content[];
    popular: ApiType.Content[];
    upcoming: ApiType.Content[];
    loading?: Boolean;
  };
};

const initState: StateType.HomeState = {
  nowPlaying: null,
  upcoming: null,
  popular: null,
  error: null,
  loading: false,
};

export default function reducer(
  state: StateType.HomeState = initState,
  action: HomeActionType
): StateType.HomeState {
  switch (action.type) {
    case HomeActionEnum.GET_TEST:
      return { ...state };
    case HomeActionEnum.GET_TOTALMOVIE:
      return { ...state, loading: true };
    case HomeActionEnum.SET_TOTALMOVIE:
      const { now_playing: nowPlaying, popular, upcoming } = action.payload;
      return {
        ...state,
        nowPlaying,
        popular,
        upcoming,
        loading: false,
      };

    default:
      return state;
  }
}
