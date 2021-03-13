import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="fixed-top header">
      <nav className="navbar navbar-light bg-primary py-3">
       <div className="d-flex justify-content-between align-items-center w-100 px-3">
         <Link to="/" className="text-white h3">Home</Link>
         <Link to="/search" className="text-white h4"><i className="fa fa-search"></i> Search news</Link>
       </div>
      </nav>
    </div>
  )
}

export default Header;
