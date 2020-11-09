import React, { useState } from 'react';

const Translator = ({translations}) => {
  const [word, setWord] = useState('')

  return (
    <React.Fragment>
      <div className="controls">
        <div className="input-container">
          <span>input:</span>
          <input
            onChange ={(e) => setWord(e.target.value)}
            type="text"
            className="text-input"
            data-testid="text-input" />
        </div>
        <div className="input-container">
          <span>output:</span>
          <input
            type="text"
            className="text-output"
            data-testid="text-output"
            value={translations.get(word) || ''}
            readOnly />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Translator;
