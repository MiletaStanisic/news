import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { loadNews, setAllNews } from '../store/actions';

function Home() {
  let _news = []

  const pageSize = 20;
  const news = useSelector(state => state.reducer.news);
  const allNews = useSelector(state => state.reducer.allNews);
  const totalResults = useSelector(state => state.reducer.totalResults);
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1)

  useEffect(() => {
    const params = {
      pageSize: pageSize,
      page: page
    }
    dispatch(loadNews(params));
  }, [])

  useEffect(() => {
    dispatch(setAllNews(news));
  }, [news])

  const loadMore = (nextPage) => {
    const params = {
      pageSize: pageSize,
      page: nextPage
    }
    dispatch(loadNews(params));
    setCurrentPage(nextPage);
  }

  const showLoadMore = (currentPage) => {
    if (currentPage * pageSize > totalResults)
      return;
    else
      return true;
  }

  return (
    <div className="container home my-5">
      <div className="row">
        {allNews && allNews.map((article, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <Card article={article} />
          </div>
        ))}
        {showLoadMore(page) && <div className="col-12">
          <button onClick={() => loadMore(page + 1)} className="btn btn-primary">Load more</button>
        </div>}
      </div>
    </div>
  )
}

export default Home;
