import React, { useState } from 'react';

const TextEditor = () => {
  const [value, setValue] = useState('')
  const [words, setWords] = useState([])

  const handleAppend = () => {
    setWords(words.concat(value))
    setValue('')
  }

  return (
    <React.Fragment>
      <div className="controls">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="word-input"
          type="text"
          data-testid="word-input" />
        <button
          onClick={handleAppend}
          type="submit"
          disabled={!value}
          data-testid="append-button">Append</button>
        <button
          onClick={() => setWords(words.slice(0, words.length - 1))}
          disabled={!words.length}
          data-testid="undo-button">Undo</button>
      </div>
      <div className="text-field" data-testid="text-field">{words.join(" ")}</div>
    </React.Fragment>
  );
}

export default TextEditor;
