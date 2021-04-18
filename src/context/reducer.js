export const initialState = {
  trackCard: {},
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "TRACKCARD":
      return {
        // NOTE: action is the dispatch that we passed in:
        ...state, // state is currentState and initialState.
        trackCard: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
