import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadArticle } from '../store/actions';

import defaultImage from '../assets/images/news-default.jpeg';

function Card({ article }) {
  const dispatch = useDispatch();

  return (
    <div className="card mb-4">
      <img src={article.urlToImage || defaultImage} className="card-img-top cover" alt="Cover" />
      <div className="card-body">
        <h5 className="card-title line-clamp" name={article.title}>{article.title}</h5>
        <p className="card-text line-clamp" name={article.description}>{article.description}</p>
      </div>
      <div className="card-body">
        <Link onClick={() => dispatch(loadArticle(article))}
          to={`article/${encodeURIComponent(article.title)}`} className="btn btn-primary card-link">Read more</Link>
      </div>
    </div>
  )
}

export default Card;
