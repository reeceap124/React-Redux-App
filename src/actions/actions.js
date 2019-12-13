import axios from 'axios';

export const FETCH_BEER_START = 'FETCH_BEER_START';
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_BEER_FAILURE = 'FETCH_BEER_FAILURE';

// async action creator
export const getBeer = () => dispatch => {
  dispatch({ type: FETCH_BEER_START });
  axios
    .get('https://api.punkapi.com/v2/beers/random')
    .then(res => {
    console.log('logged from axios action',res)
      dispatch({ type: FETCH_BEER_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      dispatch({ type: FETCH_BEER_FAILURE, payload: err });
    });
};