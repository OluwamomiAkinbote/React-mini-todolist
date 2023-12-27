import React from "react";

function EvenOrOdd() {
  const number = 37;

  if (number % 2 === 0) {
    return <h1>this is even number</h1>;
  } else {
    return <h1>this is odd number</h1>;
  }
}

export default EvenOrOdd;
