import React, { useState, useEffect } from "react";

export default function DistanceConvert (distance, { initialValue = 0}){
  React.useEffect(() => window.localStorage.setItem('distance', km));
  const [km, setKm] = React.useState(window.localStorage.getItem('distance') || initialValue);

  function handleChange(e){
    setKm(e.target.value);
  }

  function convert(km){
    return (km/1.609).toFixed(2);
  }

  return <div>
  <label htmlFor="distance">Distance in (km): </label>
            <input type="number" value={km} onChange={handleChange} />
            <p> {km} km equals {convert(km)} miles 🤗</p>
          </div>;
}