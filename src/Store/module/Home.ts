const Home = 'home/INIT';

export const HomeAction = {
  homeinit: (str: string) => {
    return {
      type: Home,
      payload: {
        str,
      },
    };
  },
};

export type HomeState = Readonly<{
  echohello: string;
}>;

type initHomeActions = ReturnType<typeof HomeAction.homeinit>;
type Action = initHomeActions;

const initState: HomeState = {
  echohello: '시작정호',
};

export default function reducer(
  state: HomeState = initState,
  action: Action
): HomeState {
  switch (action.type) {
    case Home:
      return {
        ...state,
        echohello: action.payload.str,
      };

    default:
      return state;
  }
}
