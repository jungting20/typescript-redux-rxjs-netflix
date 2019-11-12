import { moviesApi } from '../../api';
import { ofType, Epic } from 'redux-observable';
import { switchMap, tap, map } from 'rxjs/operators';
import { moviesApiObservable } from '../../apiObserbable';
import { merge, Observable } from 'rxjs';

const getHomemovie$ = merge(
  moviesApiObservable.nowPlaying(),
  moviesApiObservable.popular(),
  moviesApiObservable.upcoming()
);

export enum HomeActionEnum {
  GET_NOWPLAYING = 'home/GET_NOWPLAYING',
  GET_UPCOMING = 'home/GET_UPCOMING',
  GET_POPULAR = 'home/GET_POPULAR',
  GET_TOTALMOVIE = 'home/GET_TOTALMOVIE',
  SET_NOWPLAYING = 'home/SET_NOWPLAYING',
  SET_UPCOMING = 'home/SET_UPCOMING',
  SET_POPULAR = 'home/SET_POPULAR',
  SET_TOTALMOVIE = 'home/SET_TOTALMOVIE',
}

export const getAllMovieEpic: Epic = actions$ =>
  actions$.pipe(
    ofType(HomeActionEnum.GET_TOTALMOVIE),
    tap(a => console.log('dpd')),
    map(a => a)
  );
export const HomeActions = {
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
  set_total: (payload: StateType.HomeState) => ({
    type: HomeActionEnum.SET_TOTALMOVIE,
    payload,
  }),
};

type Action =
  | ReturnType<typeof HomeActions.get_nowplaying>
  | ReturnType<typeof HomeActions.get_upcoming>
  | ReturnType<typeof HomeActions.get_popular>;

const initState: StateType.HomeState = {
  nowPlaying: null,
  upcoming: null,
  popular: null,
  error: null,
  loading: true,
};

export default function reducer(
  state: StateType.HomeState = initState,
  action: Action
): StateType.HomeState {
  switch (action.type) {
    case HomeActionEnum.GET_TOTALMOVIE:
      console.log('total');
      return {
        ...state,
        loading: true,
      };
    case HomeActionEnum.SET_TOTALMOVIE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
