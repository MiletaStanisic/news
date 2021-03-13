import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { debounce } from '../utils/debounce';
import SelectFilter from '../components/SelectFilter';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { searchNews } from '../store/actions';
import Spinner from '../utils/loader';
import { Link } from 'react-router-dom';


function SearchNews() {
  const filteredNews = useSelector(state => state.reducer.filteredNews);
  const loading = useSelector(state => state.reducer.loading);
  const dispatch = useDispatch();

  const [sortValue, setSortValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const params = {
      sortBy: sortValue,
      q: searchTerm
    }
    dispatch(searchNews(params));
  }, [sortValue])

  const handleSearch = debounce((event) => {
    const params = {
      q: event.target.value
    }
    setSearchTerm(event.target.value);
    dispatch(searchNews(params))
  }, 300)

  return (
    <div className="container search-page">
      <section className="row header">
        <Header />
      </section>
      <section className="row search-input">
        <div className="col-12">
          <input className="form-control" placeholder="Type to search..." onChange={handleSearch} />
        </div>
        {searchTerm && <div className="col-12 mt-3">
          <SelectFilter value={sortValue} onChange={(e) => setSortValue(e.target.value)} />
        </div>}
      </section>
      {loading ? <Spinner/> : <section className="row search-results">
        {filteredNews && filteredNews.length > 0 ? filteredNews.map((article, index) => (
          <div key={index} className="col-12">
            <Card article={article} />
          </div>
        )) : <div className="mx-auto mt-5 text-muted h3">No news for searched term :(</div>}
      </section>}
      <section className="row">
        <div className="col-12 text-center">
          <Link className="text-white h4 underline" to="/"><i className="fa fa-arrow-left"></i> Back to top headlines</Link>
        </div>
      </section>
    </div>
  )
}

export default SearchNews;
