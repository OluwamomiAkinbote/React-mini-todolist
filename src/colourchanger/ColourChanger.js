import React, { useState } from "react";

function ColourChanger() {
  const availableColours = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "brown",
    "purple",
  ];
  const [currentColourIndex, setCurrentColourIndex] = useState(0);
  //event handler for changing Colour
  const changeColour = () => {
    const nextColourIndex = (currentColourIndex + 1) % availableColours.length;
    setCurrentColourIndex(nextColourIndex);
  };
  const currentColour = availableColours[currentColourIndex];
  return (
    <div style={{ backgroundColor: currentColour, padding: "20px" }}>
      <h2>Colour Changer</h2>
      <button onClick={changeColour}> changeColour</button>
    </div>
  );
}

export default ColourChanger;
