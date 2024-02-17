import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ fontSize: 50 }}>Counter: {count}</div>
      <button style={{ fontSize: 20 }} onClick={() => dispatch(increment())}>
        +
      </button>
      <button style={{ fontSize: 20 }} onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
};

export default Counter;
