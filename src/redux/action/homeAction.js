import axios from 'axios';
import actionTypes from '../actionTypes/homeActionTypes';
import {API_URL, API_KEY} from '@env';

const showLoader = show => {
  return {
    type: actionTypes.SHOW_LOADER,
    payload: show,
  };
};

export const getCarousel = () => {
  return async dispatch => {
    dispatch(showLoader(true));
    try {
      await axios
        .get(`${API_URL}movie/top_rated?api_key=${API_KEY}`)
        .then(res => {
          dispatch(showLoader(false));
          return dispatch({
            type: actionTypes.GET_CAROUSEL,
            payload: res.data.results,
          });
        });
    } catch (e) {
      dispatch(showLoader(false));
      dispatch({
        type: actionTypes.GET_CAROUSEL_ERROR,
        error: {err: true, message: e.message},
      });
    }
  };
};
