import React from "react";
import "./style.css";

import Navbar from "./Navbar";
import CapsuleButton from "./CapsuleButton";

export default function App() {
  const fetchData = async () => {
    const url = "https://swapi.dev/api/people/1";
    let response = await fetch(url);
    let result = await response.json();
    setData(result);
  };

  const [data, setData] = React.useState("");

  React.useEffect(() => fetchData(), []);

  return (
    <div className="">
      <Navbar>
        <div>Start Wars Info</div>
        <CapsuleButton>Planets</CapsuleButton>
        <CapsuleButton color="green">People</CapsuleButton>
      </Navbar>

      <h1>Hello StackBlitz!</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
