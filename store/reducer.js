import * as ACTIONS from "./actions";
const initalState = {
  characters: [],
  filteredCharacters: [],
  favorites: [],
  isDataLoading: true,
  error: null,
};

const reducer = (state = initalState, action) => {
  if (ACTIONS.SET_STATE === action.type) {
    return action.state;
  }
  if (action.type === ACTIONS.SET_CHARACTERS) {
    return {
      ...state,
      characters: action.data,
    };
  }
  if (action.type === ACTIONS.SET_FILTERED_CHARACTERS) {
    return {
      ...state,
      filteredCharacters: action.characters,
    };
  }
  if (action.type === ACTIONS.SET_LOADING) {
    return { ...state, isDataLoading: action.loading };
  }
  if (action.type === ACTIONS.FILTER_CHARACTERS) {
    const query = action.query.toLowerCase();
    const filteredCharacters = state.characters.filter((character) =>
      character.name.toLowerCase().includes(query)
    );
    console.log(filteredCharacters);
  }
  if (action.type === ACTIONS.ADD_FAVORITE) {
    return {
      ...state,
      favorites: [...state.favorites, { ...action.character }],
    };
  }
  if (action.type === ACTIONS.REMOVE_FAVORITE) {
    return { ...state, favorites: action.newFavs };
  }
  return { ...state };
};
export default reducer;
