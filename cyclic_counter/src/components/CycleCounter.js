import React, { useState } from 'react';

const CycleCounter = ({cycle}) => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick ={() => setCount((count + 1) % cycle)}
      data-testid="cycle-counter"
      style={{ fontSize: '1rem', width: 120, height: 30, }}
    >{count}</button>
  );
}

export default CycleCounter;
