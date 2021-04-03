import React from "react";
import "./style.css";

import Navbar from "./Navbar";
import CapsuleButton from "./CapsuleButton";
import Example from "./Example";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar>
          <div>Start Wars Info</div>
          <CapsuleButton>Planets</CapsuleButton>
          <CapsuleButton color="green">People</CapsuleButton>
        </Navbar>

        <Example />
      </div>
    </QueryClientProvider>
  );
}

// does not work in StackBlitz
const fetchData = async callback => {
  const url = "https://swapi.dev/api/people/1";
  let response = await fetch(url);
  let result = await response.json();
  console.log(result);
  callback(result);
};
