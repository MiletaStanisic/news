import * as AT from '../actions/types';
import { updateObject } from '../utils';

const initialState = {
  allNews: [],
  news: [],
  filteredNews: [],
  article: {},
  totalResults: 0,
  error: null,
  loading: false
}

const setAllNewsStart = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  })
}

const setAllNewsSuccess = (state, action) => {
  return updateObject(state, {
    allNews: action.allNews,
    loading: action.loading
  })
}

const loadNewsStart = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  })
}

const loadNewsSuccess = (state, action) => {
  return updateObject(state, {
    news: action.news,
    totalResults: action.totalResults,
    loading: action.loading
  })
}

const loadNewsFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: action.loading
  })
}

const searchNewsStart = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  })
}

const searchNewsSuccess = (state, action) => {
  return updateObject(state, {
    filteredNews: action.filteredNews,
    loading: action.loading
  })
}

const searchNewsFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: action.loading
  })
}

const loadArticleStart = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  })
}

const loadArticleSuccess = (state, action) => {
  localStorage.setItem('article', JSON.stringify(action.article));

  return updateObject(state, {
    article: action.article,
    loading: action.loading
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case AT.SET_ALL_NEWS_START: return setAllNewsStart(state, action)
    case AT.SET_ALL_NEWS_SUCCESS: return setAllNewsSuccess(state, action)

    case AT.LOAD_NEWS_START: return loadNewsStart(state, action)
    case AT.LOAD_NEWS_SUCCESS: return loadNewsSuccess(state, action)
    case AT.LOAD_NEWS_FAILED: return loadNewsFailed(state, action)

    case AT.SEARCH_NEWS_START: return searchNewsStart(state, action)
    case AT.SEARCH_NEWS_SUCCESS: return searchNewsSuccess(state, action)
    case AT.SEARCH_NEWS_FAILED: return searchNewsFailed(state, action)

    case AT.LOAD_ARTICLE_START: return loadArticleStart(state, action)
    case AT.LOAD_ARTICLE_SUCCESS: return loadArticleSuccess(state, action)

    default: return state;
  }
}

export default reducer;