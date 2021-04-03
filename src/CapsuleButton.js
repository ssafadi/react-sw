import React from "react";

export default function CapsuleButton(props) {
  const color = "border-blue-500 text-blue-500 hover:bg-blue-600";
  const buttonStyle =
    "p-1 m-1 border rounded-xl transition duration-500 ease select-none hover:text-white focus:outline-none focus:shadow-outline";
  return (
    <button
      type="button"
      className={color + " " + buttonStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
