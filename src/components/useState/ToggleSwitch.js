import React, { useState } from "react";

function ToggleSwitch() {
  const initial = false;
  const [isOn, setSwitch] = useState(initial);
  return (
    <div>
      <h2> Toggle is {isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => setSwitch(!initial)}>Toggle</button>
    </div>
  );
}

export default ToggleSwitch;
