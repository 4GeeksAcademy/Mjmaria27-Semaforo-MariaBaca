// src/Home.jsx
import React from "react";
import TrafficLight from "./TrafficLight.jsx"; // Importa el semáforo

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <TrafficLight />
    </main>
  );
}
