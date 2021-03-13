import React from 'react';
import Header from '../components/Header';

function PageNotFound() {
  return (
    <div className="page-loading">
      <Header />
      <div className="text-white h1 content mx-auto">
        <b>404</b> <br />
          Page Not Found
      </div>
    </div>
  )
}

export default PageNotFound;
