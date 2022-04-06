import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  decrement,
  increment,
  selectCount,
} from '../redux/states/counterSlice';

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  return (
    <div>
      <h1>Counter Redux toolkit</h1>

      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
