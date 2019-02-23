import React from 'react';
import './Counter.css';

const Counter = ({ incrementCounter, decrementCounter, counter }) => {
  return (
    <div className="Counter">
      <div className="Counter__buttons">
        <button type="button" onClick={incrementCounter}>
          Increment
        </button>
        <button type="button" onClick={decrementCounter}>
          Decrement
        </button>
      </div>
      <h2>Total: {counter}</h2>
    </div>
  );
};

export default Counter;
