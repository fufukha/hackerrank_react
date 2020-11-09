import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
  const [ sortType, setSortType ] = useState('upvotes')

  const sortByDate = array => array.sort((a, b) => new Date(b.date) - new Date(a.date))
  const sortByUpvotes = array => array.sort((a, b) => b.upvotes - a.upvotes)

  const sortedArticles = sortType === 'upvotes' ? sortByUpvotes(articles) : sortByDate(articles)

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button
                  data-testid="most-upvoted-link"
                  className="small"
                  onClick={() => setSortType('upvotes')}>
                    Most Upvoted
                </button>
                <button
                  data-testid="most-recent-link"
                  className="small"
                  onClick={() => setSortType('date')}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
