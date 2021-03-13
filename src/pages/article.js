import React, { useEffect, useState } from 'react';
import { humanizeDate } from '../helpers';

import defaultImage from '../assets/images/news-default.jpeg';

function Article() {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const article = localStorage.getItem('article');
    setArticle(JSON.parse(article));
  }, [])

  return (
    <div className="container article my-5">
      <div className="row">
        <div className="col-12">
          <h1>{article.title}</h1>
          <span className="text-muted d-block">Author: {article.author}</span>
          <span className="text-muted d-block">Published: {humanizeDate(article.publishedAt)}</span>
        </div>
        <div className="col-12">
          <p className="text-muted">{article.description}</p>
        </div>
        <div className="col-12">
          <img className="w-100" src={article.urlToImage || defaultImage} alt="cover"/>
        </div>
        <div className="col-12">
          <p className="h4">{article.content}</p>
        </div>
        <div className="col-12">
          <a className="link h4" rel="noreferrer" href={article.url} target="_blank">Click here to read more.</a>
        </div>
      </div>
    </div>
  )
}

export default Article;
