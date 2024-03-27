import { useState } from 'react';

const Counter = () => {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <div>
      <button
        onClick={() => setCurrentValue(currentValue - 1)}
        disabled={currentValue === 0}
      >
        -1
      </button>
      <span>{currentValue}</span>
      <button
        onClick={() => setCurrentValue(currentValue + 1)}
        disabled={currentValue === 5}
      >
        +1
      </button>
    </div>
  );
};

export default Counter;
