const HOME = 'home/INIT';

export const HomeActions = {
  homeinit: (str: string) => {
    return {
      type: HOME,
      payload: {
        str,
      },
    };
  },
};

export type HomeState = Readonly<{
  echohello: string;
}>;

type initHomeActions = ReturnType<typeof HomeActions.homeinit>;
type Action = initHomeActions;

const initState: HomeState = {
  echohello: '현수안녕',
};

export default function reducer(
  state: HomeState = initState,
  action: Action
): HomeState {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        echohello: action.payload.str,
      };

    default:
      return state;
  }
}
