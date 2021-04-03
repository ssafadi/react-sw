import React from "react";

export default function CapsuleButton(props) {
  const color = props.color ? props.color : "blue";

  const hover = `border-${color}-500 text-${color}-500 hover:bg-${color}-600 hover:text-white`;
  const style =
    "p-1 m-1 border rounded-xl transition duration-500 ease select-none focus:outline-none";
  return (
    <button
      type="button"
      className={`${hover} ${style}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
