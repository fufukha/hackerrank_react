import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [titles, setTitles] = useState([])
  const [page, setPage] = useState(1)
  const url = 'https://jsonmock.hackerrank.com/api/articles?page='

  const getTitles = (object) => {
    return object.data.reduce((acc, article) => {
      if(article.title) acc.push(article.title)
      return acc
    },[])
  }

  useEffect(() => {
    const pageUrl = `${url}${page}`
    fetch(pageUrl)
      .then(response => response.json())
      .then(data => {
        setTitles(getTitles(data))
        setTotalPages(data.total_pages)
      })
  },[page])

  return (
    <React.Fragment>
      <div className="pagination">
        {Array(totalPages)
          .fill()
          .map((cv, i) => {
            return (
              <button
                onClick={() => setPage(i + 1)}
                data-testid="page-button"
                key={`page-button-${i +1}`}>{i + 1}
              </button>
            )
          })
        }
      </div>
      <ul className="results">
        {titles.map((title, i) => {
          return (
            <li
              key={`title-${i + 1}`}
              data-testid="result-row">{title}</li>
          )
        })}
      </ul>
    </React.Fragment>
  );
}

export default Articles;
