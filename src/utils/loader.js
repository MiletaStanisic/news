import React from 'react'
import gif from '../assets/images/loader.gif';

function Spinner() {
  return (
    <div className="page-loading">
      <img src={gif} alt="Loading" />
    </div>
  )
}

export default Spinner;
