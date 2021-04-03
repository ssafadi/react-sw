import React from "react";
import "./style.css";

import Navbar from "./Navbar";
import CapsuleButton from "./CapsuleButton";

export default function App() {
  return (
    <div className="">
      <Navbar>
        <div>Start Wars Info</div>
        <CapsuleButton>Planets</CapsuleButton>
      </Navbar>

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
