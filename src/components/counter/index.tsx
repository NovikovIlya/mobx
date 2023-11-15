import React from 'react';
import counterStore from '../../store/counter-store';
import { observer } from 'mobx-react-lite';

type Props = {
  increment: (value: number) => void;
  decrement: (value: number) => void;
  count: number;
  total: number;
};

const Counter = ({ increment, decrement, total, count }: Props) => {
  return (
    <>
      <div className="card">
        <button onClick={() => increment(1)}>+</button>
        <div>{count}</div>
        <button onClick={() => decrement(1)}>-</button>
        <div>total:{total}</div>
      </div>
    </>
  );
};

export default Counter;
