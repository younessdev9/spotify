export const initialState = {
  user: null,
  playListe: [],
  palying: false,
  item: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
