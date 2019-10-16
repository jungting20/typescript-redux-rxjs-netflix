const HOME = 'home/INIT';

export const HomeAction = {
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
  hello: string;
}>;

type initHomeActions = ReturnType<typeof HomeAction.homeinit>;
type Action = initHomeActions;

const initState: HomeState = {
  hello: 'hello',
};

export default function reducer(
  state: HomeState = initState,
  action: Action
): HomeState {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        hello: action.payload.str,
      };

    default:
      return state;
  }
}
