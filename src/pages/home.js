import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/actions';

function Home() {
  const news = useSelector(state => state.reducer.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home;
