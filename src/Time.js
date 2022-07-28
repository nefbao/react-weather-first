import React from "react";

export default function Time(props) {
  return (
    <span className="Time">
      {props.day} {props.hour}:{props.minute}
    </span>
  );
}
