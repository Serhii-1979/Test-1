import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
