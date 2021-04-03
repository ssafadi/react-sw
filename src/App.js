import React from "react";
import "./style.css";

import Navbar from "./Navbar";
import CapsuleButton from "./CapsuleButton";

export default function App() {
  const [data, setData] = React.useState("");

  React.useEffect(() => setData(fetchData()), [data]);

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

function fetchData() {
  let result = {};
  const url = "https://swapi.dev/api/people/1";
  fetch(url).then(r => (result = r.json()));
  console.log(result);
  return result;
}
