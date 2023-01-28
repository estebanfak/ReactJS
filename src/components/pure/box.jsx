import React, { useState } from "react";

let boxStyle = {
  backgroundColor: "black",
  width: "255px",
  height: "255px",
};

function Box() {
  const [color, setColor] = useState(boxStyle);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function cambiarColor() {
    setColor({
      backgroundColor: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`,
      width: "255px",
      height: "255px",
    });
  }

  function toggleChangeColor() {
    setCanChangeColor(!canChangeColor);
  }

  return (
    <div
      style={color}
      onMouseMove={canChangeColor ? cambiarColor : null}
      onDoubleClick={toggleChangeColor}
    ></div>
  );
}

export default Box;
