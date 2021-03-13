import React, { useEffect, useState } from 'react';
import { humanizeDate } from '../helpers';

import defaultImage from '../assets/images/news-default.jpeg';
import Header from '../components/Header';

function Article() {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const article = localStorage.getItem('article');
    setArticle(JSON.parse(article));
  }, [])

  return (
    <div className="container article my-5 text-white">
      <section className="row header-section">
        <Header />
      </section>
      <section className="row title">
        <div className="col-12">
          <h1>{article.title}</h1>
          <div className="d-block d-md-flex align-items-center justify-content-between mt-3">
            <span className="text-muted d-block d-md-inline">Source: {article?.source?.name ?? ''}</span>
            <span className="text-muted d-block d-md-inline">Author: {article.author}</span>
          </div>
          <span className="text-muted d-block">Published: {humanizeDate(article.publishedAt)}</span>
        </div>
      </section>
      <section className="row description">
        <div className="col-12">
          <p className="text-white h4">{article.description}</p>
        </div>
      </section>
      <section className="row image">
        <div className="col-12">
          <img className="w-100" src={article.urlToImage || defaultImage} alt="cover" />
        </div>
      </section>
      <section className="row content">
        <div className="col-12">
          <p className="h4">{article.content}</p>
        </div>
      </section>
      <section className="row read-more">
        <div className="col-12">
          <a className="link h4" rel="noreferrer" href={article.url} target="_blank">Click here to read more.</a>
        </div>
      </section>
    </div>
  )
}

export default Article;
