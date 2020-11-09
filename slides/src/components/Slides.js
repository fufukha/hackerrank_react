import React, { useState } from 'react';

function Slides({slides}) {
  const [ index, setIndex ] = useState(0)

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                  data-testid="button-restart"
                  className="small outlined"
                  disabled={index === 0}
                  onClick={() => setIndex(0)}>
                    Restart
                 </button>
                <button
                  data-testid="button-prev"
                  className="small"
                  disabled={index === 0}
                  onClick={() => setIndex(index - 1)}>
                    Prev
                </button>
                <button
                  data-testid="button-next"
                  className="small"
                  disabled={slides.length - 1 === index}
                  onClick ={() => setIndex(index + 1)}>
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );

}

export default Slides;
