import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadArticle, loadNews, setAllNews } from '../store/actions';
import { LOAD_ARTICLE_START, LOAD_NEWS_START, SET_ALL_NEWS_START } from '../store/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch news action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({ news: [], allNews: [], article: {} });
  });

  describe('when all news are loaded', () => {
    it('fires a set all news action', () =>
      store
        .dispatch(setAllNews([]))
        .then(() => expect(store.getActions()).toContainEqual({ type: SET_ALL_NEWS_START, loading: true })));
  })

  describe('when news are fetched', () => {
    it('fires a load news action', () =>
      store
        .dispatch(loadNews({}))
        .then(() => expect(store.getActions()).toContainEqual({ type: LOAD_NEWS_START, loading: true })));
  })
})