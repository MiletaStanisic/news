import * as AT from './types';
import API from '../../api';

export const fetchNews = () => async (dispatch, getState) => {
  dispatch(fetchNewsStart())
  API.get('top-headlines?country=us')
    .then(response => dispatch(fetchNewsSuccess(response)))
    .catch(error => dispatch(fetchNewsFailed(error)))
}

export const fetchNewsStart = () => {
  return {
    type: AT.FETCH_NEWS_START,
    loading: true
  }
}

export const fetchNewsFailed = (error) => {
  return {
    type: AT.FETCH_NEWS_FAILED,
    error: error,
    loading: false,
  }
}

export const fetchNewsSuccess = response => {
  return {
    type: AT.FETCH_NEWS_SUCCESS,
    news: response?.data?.articles ?? [],
    loading: false
  }
}

