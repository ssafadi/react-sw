import React from "react";

export default function Navbar(props) {
  return (
    <nav className="flex justify-center content-center items-center">
      {props.children}
    </nav>
  );
}
