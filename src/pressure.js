import React, { useState, useEffect } from "react";

export default function DistanceConvert (pressure, { initialValue = 0}){
  React.useEffect(() => window.localStorage.setItem('pressure', bar));
  const [bar, setBar] = React.useState(window.localStorage.getItem('pressure') || initialValue);

  function handleChange(e){
    setBar(e.target.value);
  }

  function convert(bar){
    return (bar * 14.7).toFixed(2);
  }

  return  <div>
            <label htmlFor="pressure">Pressure in (psi): </label>
              <input type="number" value={bar} onChange={handleChange} />
            <p> {bar} bar equals {convert(bar)} psi 🤗</p>
          </div>;
}