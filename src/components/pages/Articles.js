import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsArticles, selectAllArticles } from '../../features/Articles/ArticleSlice';
import './styles/Articles.css';


const Articles = () => {
  const dispatch = useDispatch();
// This is the data brought in from the redux state "ArticleSlice.js"
  const { articles, status, error } = useSelector(selectAllArticles);

// This is the where the function is called from the redux state "ArticleSlice.js".
  useEffect(() => {
    dispatch(fetchNewsArticles());
  }, [dispatch]);

// Check the status of the API request and if it is stricly equal to string "loading" then show below.
if (status === 'loading') {
    return (
      <div className="d-flex justify-content-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
// Check the status of the API request and if it is stricly equal to string "failed" then show below.
if (status === 'failed') {
  return (
    <div className="alert alert-danger mt-3" role="alert">
      Error: {error}
    </div>
  );
}

  return (
    <div className="container mt-5">
      <h1 className="article-heading">News Articles</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="article-card">
              <div className="article-card-body">
                <h5 className="article-card-title">{article.title}</h5>
                <p className="article-card-author">Author: {article.by}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-card-button"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;