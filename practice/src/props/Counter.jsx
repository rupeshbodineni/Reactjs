
import React, { useState } from "react";

let Counter = () => {
  let [counter, setCounter] = useState(1);

  let incHandler = () => {
    setCounter(counter + 1);
  };

  let decHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <h2>{counter}</h2>
      <button onClick={decHandler}>-</button>
      <button onClick={incHandler}>+</button>
    </div>
  );
};

export default Counter;