import React, { useState } from "react";
import "./index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const cycleColors = () => {
    const colors = ["red", "green", "yellow"];
    if (showPurple) colors.push("purple");
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
        {showPurple && (
          <div
            className={`light purple ${color === "purple" ? "glow" : ""}`}
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>

      <button onClick={cycleColors} style={{ margin: "10px" }}>
        Cambiar color
      </button>

      {!showPurple && (
        <button onClick={() => setShowPurple(true)}>
          Agregar luz púrpura
        </button>
      )}
    </div>
  );
}

export default TrafficLight;
