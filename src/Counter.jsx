// Counter component renders the UI counter and handles user interactions.
// 'useSelector accesses the value property.
// 'useDispatch' hook sends the funtion to the actions.
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/CounterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);
  
  // increments by five added.
  const incrementByFive = () => {
    dispatch(incrementByAmount(5));
  };
  // decrements by five added
  const decrementByFive = () => {
    dispatch(decrement(5));
  };

  const byAmount = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
    setInput(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={decrementByFive}>Decrement by 5</button>
      <form onSubmit={byAmount}>
        <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Counter;

