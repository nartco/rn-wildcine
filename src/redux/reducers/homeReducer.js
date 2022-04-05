import actionTypes from '../actionTypes/homeActionTypes';

const initialState = {
  carouselMovies: [],
  loader: false,
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CAROUSEL:
      return {
        ...state,
        carouselMovies: action.payload,
      };
    case actionTypes.GET_CAROUSEL_ERROR:
      return {
        ...state,
        carouselMovies: action.error,
      };
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
