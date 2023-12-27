import React, { useState } from "react";

function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default HookCounter;
