import React, { useState, useEffect } from "react";
import DistanceConvert from "./distance";
import PressureConvert from "./pressure";
// import "./unit";

export default function Converter (unit = val){
  const [val, setVal] = React.useState("");

  // if (val = "Distance") {
  //   return <DistanceConvert />
  // } else if (unit = "Pressure"){
  //   return <PressureConvert />
  // }

  function handleChange(e){
      setVal(e.target.value)
  }

  return  <div>
            <div>
              <label for="unit">Choose Unit to Convert:</label>
              <select name="unit" id="unit" onChange={handleChange}>
                <option value="Distance">Distance (km)</option>
                <option value="Pressure">Pressure (bar)</option>
              </select>
            </div>
            <div>{unit="Distance" ? <DistanceConvert /> : <PressureConvert />}</div>
          </div>
}
