import React from 'react';

function Articles({ articles }) {
  const articleList = articles.map((article, i) => (
    <tr data-testid="article" key={i}>
        <td data-testid="article-title">{article.title}</td>
        <td data-testid="article-upvotes">{article.upvotes}</td>
        <td data-testid="article-date">{article.date}</td>
    </tr>
  ))
  
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                  {articleList}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
