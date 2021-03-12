import * as AT from '../actions/types';
import { updateObject } from '../utils';

const initialState = {
  news: [],
  article: [],
  error: null,
  loading: false
}

const fetchNewsStart = (state, action) => {
  return updateObject(state, {
    loading: action.loading
  })
}

const fetchNewsSuccess = (state, action) => {
  return updateObject(state, {
    news: action.news,
    loading: action.loading
  })
}

const fetchNewsFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: action.loading
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case AT.FETCH_NEWS_START: return fetchNewsStart(state, action)
    case AT.FETCH_NEWS_SUCCESS: return fetchNewsSuccess(state, action)
    case AT.FETCH_NEWS_FAILED: return fetchNewsFailed(state, action)

    default: return state;
  }
}

export default reducer;