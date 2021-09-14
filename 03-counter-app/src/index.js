import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterAPP from "./CounterApp"


const divROOt = document.querySelector("#root");
ReactDOM.render(<CounterAPP value={0} />, divROOt);
