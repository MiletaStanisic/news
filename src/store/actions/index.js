import * as AT from './types';
import API from '../../api';

export const setAllNews = payload => async (dispatch, getState) => {
  dispatch(setAllNewsStart())
  const promise = await dispatch(setAllNewsSuccess(payload))
  return promise;
}

export const setAllNewsStart = () => {
  return {
    type: AT.SET_ALL_NEWS_START,
    loading: true
  }
}

export const setAllNewsSuccess = response => {
  return {
    type: AT.SET_ALL_NEWS_SUCCESS,
    allNews: response,
    loading: false
  }
}


export const loadNews = params => async (dispatch, getState) => {
  const loading = params?.loading ?? true;
  params && params.loading && delete params.loading;

  dispatch(loadNewsStart(loading))
  const promise = await API.get('top-headlines?country=us', params)
    .then(response => dispatch(loadNewsSuccess(response)))
    .catch(error => dispatch(loadNewsFailed(error)))
  return promise;
}

export const loadNewsStart = loading => {
  return {
    type: AT.LOAD_NEWS_START,
    loading: loading
  }
}

export const loadNewsFailed = (error) => {
  return {
    type: AT.LOAD_NEWS_FAILED,
    error: error,
    loading: false,
  }
}

export const loadNewsSuccess = response => {
  return {
    type: AT.LOAD_NEWS_SUCCESS,
    news: response?.data?.articles ?? [],
    totalResults: response?.data?.totalResults ?? 0,
    loading: false
  }
}

export const searchNews = params => (dispatch, getState) => {
  dispatch(searchNewsStart())
  API.get('top-headlines?country=us', params)
    .then(response => dispatch(searchNewsSuccess(response, params.q)))
    .catch(error => dispatch(searchNewsFailed(error)))
}

export const searchNewsStart = () => {
  return {
    type: AT.SEARCH_NEWS_START,
    loading: true
  }
}

export const searchNewsFailed = (error) => {
  return {
    type: AT.SEARCH_NEWS_FAILED,
    error: error,
    loading: false,
  }
}

export const searchNewsSuccess = (response, query) => {
  return {
    type: AT.SEARCH_NEWS_SUCCESS,
    filteredNews: query ? response.data.articles : [],
    loading: false
  }
}

export const loadArticle = payload => (dispatch, getState) => {
  dispatch(loadArticleStart())
  dispatch(loadArticleSuccess(payload))
}

export const loadArticleStart = () => {
  return {
    type: AT.LOAD_ARTICLE_START,
    loading: true
  }
}

export const loadArticleSuccess = response => {
  return {
    type: AT.LOAD_ARTICLE_SUCCESS,
    article: response,
    loading: false
  }
}

