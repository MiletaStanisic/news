import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="fixed-top header">
      <nav className="navbar navbar-light bg-primary py-3">
       <div className="d-flex justify-content-between align-items-center">
         <Link to="/" className="text-white h3">News</Link>
       </div>
      </nav>
    </div>
  )
}

export default Header;
