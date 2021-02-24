import React from "react";
import "./style.css";
import UnitOptions from "./unit";
import Converter from "./converter";
// import val from "./unit";


export default function App() {
  return (
    <div>
      <h1>Simple Unit Converter!</h1>
      <Converter />
    </div>
  );
}
