import React from "react";

import "./Card.css";

const Card = props => {
  return (
    <li className="coins-item">
      <h2>{props.name}</h2>
      <p>RANK {props.rank}</p>
      <p>{props.price} USD</p>
    </li>
  );
};

export default Card;
