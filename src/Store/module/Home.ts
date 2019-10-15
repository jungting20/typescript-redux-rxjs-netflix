const HOME = 'home/INIT';

export const HomeAction = {
  homeinit: (str: string) => {
    return {
      type: HOME,
      payload: {
        str,
      },
    } as const;
  },
};

export type HomeState = Readonly<{
  start: string;
}>;

type initHomeActions = ReturnType<typeof HomeAction.homeinit>;
type Action = initHomeActions;

const initState: HomeState = {
  start: 'hello',
};

export default function reducer(
  state: HomeState = initState,
  action: Action
): HomeState {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        start: action.payload.str,
      };

    default:
      return state;
  }
}
