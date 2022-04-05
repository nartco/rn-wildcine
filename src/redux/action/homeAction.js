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
  showLoader(true);
  return async dispatch => {
    try {
      await axios.get(`${API_URL}movie/7631?pi_key=${API_KEY}`).then(res => {
        showLoader(false);
        return dispatch({
          type: actionTypes.GET_CAROUSEL,
          payload: res.data,
        });
      });
    } catch (e) {
      showLoader(false);
      dispatch({
        type: actionTypes.GET_CAROUSEL_ERROR,
        error: {err: true, message: e.message},
      });
    }
  };
};
