import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { loadNews, searchNews, setAllNews } from '../store/actions';
import { debounce } from '../utils/debounce';

function Home() {
  const pageSize = 20;
  const news = useSelector(state => state.reducer.news);
  const allNews = useSelector(state => state.reducer.allNews);
  const filteredNews = useSelector(state => state.reducer.filteredNews);
  const totalResults = useSelector(state => state.reducer.totalResults);
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(() => {
    const params = {
      sortBy: sortValue,
      q: searchTerm
    }
    dispatch(searchNews(params));
  }, [sortValue])

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

  const handleSearch = debounce((event) => {
    const params = {
      q: event.target.value
    }
    setSearchTerm(event.target.value);
    dispatch(searchNews(params))
  }, 300)


  return (
    <div className="container home my-5">
      <div className="row mb-5">
        <div className="col-6">
          <input className="form-control" placeholder="Type to search..." onChange={handleSearch} />
        </div>
        {searchTerm && <div className="col-6">
          <select className="form-control" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
            <option value="">Select filter</option>
            <option value="popularity">Popularity</option>
            <option value="relevancy">Relevance</option>
            <option value="publishedAt">Published date</option>
          </select>
        </div>}
      </div>
      {searchTerm && <div className="row">
        <div className="col-12">
          <div className="h1">Search results</div>
        </div>
        {filteredNews.map((article, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <Card article={article} />
          </div>
        ))}
      </div>}
      <div className="row">
        <div className="col-12">
          <h1>Top Headlines</h1>
        </div>
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
