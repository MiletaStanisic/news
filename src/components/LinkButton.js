import React from 'react'
import { Link } from 'react-router-dom';

function LinkButton({ onClick, to, text }) {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="btn btn-link card-link">{text}
    </Link>
  )
}


export default LinkButton;
