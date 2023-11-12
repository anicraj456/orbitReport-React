import React from "react";
import satData from "./satData";
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  displaySats.map((id,sat) => {
  return (
    <div className="flex-container">
      <button onClick={() => filterByType(sat)} key={id}>{sat} Orbit </button>
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
  })
}
export default Buttons;