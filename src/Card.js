import React from "react";
import "./Card.css";

function Card(props) {
  // props is a javascript object being sent.
  const data = props.data; // this should work
  return (
    <div>
      <p className="card">{data}</p>
    </div>
  );
}

export default Card;
