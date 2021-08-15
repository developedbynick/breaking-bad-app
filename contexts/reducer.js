export const ACTIONS = {
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  ADD_FAVORITE: "ADD_FAVORITE",
};

const reducer = (state, action) => {
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
