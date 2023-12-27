import React from "react";

function Temperature() {
  const temperature = 18;
  return (
    <div>
      <h3>{temperature >= 20 ? "IT'S COLD" : "IT'S SUNNY DAY"}</h3>
    </div>
  );
}

export default Temperature;
