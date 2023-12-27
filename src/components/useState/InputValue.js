import React, { useState } from "react";

function InputValue() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h2>Input Form</h2>
      <label htmlFor="">
        Enter:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <p>Typed Value: {inputValue}</p>
    </div>
  );
}

export default InputValue;
