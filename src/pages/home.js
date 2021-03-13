import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Header from '../components/Header';
import SelectFilter from '../components/SelectFilter';
import { loadNews, searchNews, setAllNews } from '../store/actions';
import { debounce } from '../utils/debounce';

function Home() {
  const pageSize = 20;
  const allNews = useSelector(state => state.reducer.allNews);
  const filteredNews = useSelector(state => state.reducer.filteredNews);
  const totalResults = useSelector(state => state.reducer.totalResults);
  const dispatch = useDispatch();

  const [page, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(setAllNews([]))
      .then(response => loadPage(page, response.allNews))
  }, [])

  useEffect(() => {
    const params = {
      sortBy: sortValue,
      q: searchTerm
    }
    dispatch(searchNews(params));
  }, [sortValue])

  const loadPage = (nextPage, initState) => {
    const params = {
      pageSize: pageSize,
      page: nextPage
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

  const handleSearch = debounce((event) => {
    const params = {
      q: event.target.value
    }
    setSearchTerm(event.target.value);
    dispatch(searchNews(params))
  }, 300)


  return (
    <div className="container home">
      <section className="row header-section">
        <Header />
      </section>

      <section className="row search-input">
        <div className="col-3">
          <input className="form-control" placeholder="Type to search..." onChange={handleSearch} />
        </div>
        {searchTerm && <div className="col-3">
          <SelectFilter value={sortValue} onChange={(e) => setSortValue(e.target.value)} />
        </div>}
      </section>

      {searchTerm &&
        <section className="row search-results">
          <div className="col-12">
            <h1 className="h1 text-white">Search results</h1>
          </div>
          {filteredNews.map((article, index) => (
            <div key={index} className="col-12">
              <Card article={article} />
            </div>
          ))}
        </section>}

      <section className="row top-headlines">
        <div className="col-12 title text-white mb-3 text-center">
          <h1>Top Headlines</h1>
        </div>
        {allNews && allNews.map((article, index) => (
          <div key={index} className="col-12">
            <Card article={article} />
          </div>
        ))}
      </section>
      <section className="row load-more">
        {showLoadMore(page) && <div className="col-12 text-center">
          <button onClick={() => loadPage(page + 1, allNews)} className="btn btn-lg btn-primary">Load more</button>
        </div>}
      </section>
    </div>
  )
}

export default Home;
