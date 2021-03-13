import React from 'react'
import { useDispatch } from 'react-redux';
import { loadArticle } from '../store/actions';

import defaultImage from '../assets/images/news-default.jpeg';
import LinkButton from './LinkButton';
import { humanizeDate } from '../helpers';

function Card({ article }) {
  const dispatch = useDispatch();

  return (
    <div className="card mb-4 bg-dark text-white">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={article.urlToImage || defaultImage} className="card-image" alt="Cover" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text line-clamp text-muted">{article.description}</p>
          </div>
          <div className="card-body">
            <div className="card-text d-flex justify-content-between align-items-center">
              <p className="card-text"><small className="text-muted">Published: {humanizeDate(article.publishedAt)}</small></p>
              <LinkButton
                onClick={() => dispatch(loadArticle(article))}
                to={`article/${encodeURIComponent(article.title)}`}
                text="Read full article" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
