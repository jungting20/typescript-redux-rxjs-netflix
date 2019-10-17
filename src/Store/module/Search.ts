const SEARCHINIT = 'search/INIT';

const SEARCHTWO = 'search/two';

export const SearchActions = {
  searchinit: (str: string) => {
    return {
      type: SEARCHINIT,
      payload: {
        str,
      },
    };
  },
  searchTwo: (int: number) => {
    return {
      type: SEARCHTWO,
      payload: {
        int,
      },
    };
  },
};

export type SeachState =
  | Readonly<{
      searchHello: string;
    }>
  | Readonly<{ searchtwo: string }>;
const initState: SeachState = {
  searchHello: 'SearchHello',
};

type SearchType = ReturnType<typeof SearchActions.searchinit>;

export function reducer(
  state: SeachState = initState,
  actions: SearchType
): SeachState {
  switch (actions.type) {
    case SEARCHINIT:
      return {
        ...state,
        searchHello: actions.payload.str,
      };
    default:
      return state;
  }
}
