import React from 'react'
import { useDispatch } from 'react-redux';
import { loadArticle } from '../store/actions';

import defaultImage from '../assets/images/news-default.jpeg';
import LinkButton from './LinkButton';

function Card({ article }) {
  const dispatch = useDispatch();

  return (
    <div className="card mb-4">
      <img src={article.urlToImage || defaultImage} className="card-img-top cover" alt="Cover" />
      <div className="card-body">
        <h5 className="card-title line-clamp">{article.title}</h5>
        <p className="card-text line-clamp">{article.description}</p>
      </div>
      <div className="card-body">
        <LinkButton
          onClick={() => dispatch(loadArticle(article))}
          to={`article/${encodeURIComponent(article.title)}`}
          text="Read more" />
      </div>
    </div>
  )
}

export default Card;
