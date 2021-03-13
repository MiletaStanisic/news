import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import { loadNews, searchNews, setAllNews } from '../store/actions';
import Spinner from '../utils/loader';

function Home() {
  const pageSize = 20;
  const allNews = useSelector(state => state.reducer.allNews);
  const loading = useSelector(state => state.reducer.loading);
  const totalResults = useSelector(state => state.reducer.totalResults);
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setAllNews([]))
      .then(response => loadPage(page, response.allNews))
  }, [])

  const loadPage = (nextPage, initState, loading) => {
    const params = {
      pageSize: pageSize,
      page: nextPage,
      loading: loading
    }
    dispatch(loadNews(params))
      .then(response => {
        const all_news = [...initState, ...response.news]
        dispatch(setAllNews(all_news))
      })
    setCurrentPage(nextPage);
  }

  const showLoadMore = (currentPage) => {
    if (currentPage * pageSize > totalResults)
      return;
    else
      return true;
  }


  return (
    <div className="container home">
      <section className="row header-section">
        <Header />
      </section>

      {loading ? <Spinner /> : <section className="row top-headlines">
        <div className="col-12 title text-white mb-3 text-center">
          <h1>Top Headlines</h1>
        </div>
        {allNews && allNews.length > 0 ? allNews.map((article, index) => (
          <div key={index} className="col-12">
            <Card article={article} />
          </div>
        )) : <div className="mt-5 mx-auto text-muted h3">No news for displaying :(</div>}
      </section>}
      <section className="row load-more">
        {showLoadMore(page) && <div className="col-12 text-center">
          <button onClick={() => loadPage(page + 1, allNews, false)} className="btn btn-lg btn-primary">Load more</button>
        </div>}
      </section>
    </div>
  )
}

export default Home;
