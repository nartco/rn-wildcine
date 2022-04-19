import axios from 'axios';
import actionTypes from '../actionTypes/homeActionTypes';
import {API_URL, API_KEY} from '@env';

const showLoader = show => {
  return {
    type: actionTypes.SHOW_LOADER,
    payload: show,
  };
};

export const getCarousel = categories => {
  const links = categories.map(
    cat => `${API_URL}movie/${cat}?api_key=${API_KEY}`,
  );
  const requestOne = axios.get(links[0]);
  const requestTwo = axios.get(links[1]);
  const requestThree = axios.get(links[2]);

  return async dispatch => {
    dispatch(showLoader(true));
    try {
      await axios.all([requestOne, requestTwo, requestThree]).then(
        axios.spread((...responses) => {
          dispatch(showLoader(false));
          const dataObj = {};
          dataObj[categories[0]] = responses[0].data.results;
          dataObj[categories[1]] = responses[1].data.results;
          dataObj[categories[2]] = responses[2].data.results;

          return dispatch({
            type: actionTypes.GET_CAROUSEL,
            payload: dataObj,
          });
        }),
      );
    } catch (e) {
      console.log(e);
      dispatch(showLoader(false));
      dispatch({
        type: actionTypes.GET_CAROUSEL_ERROR,
        error: {err: true, message: e.message},
      });
    }
  };
};
