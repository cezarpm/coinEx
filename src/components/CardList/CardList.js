import React from "react";

import Card from "../Card/Card.js";
import "./CardList.css";

const CardList = props => {
  console.log(props.coins[0]);

  return (
    <ul className="coins-list">
      {props.coins.map(c => (
        <Card key={c.id} rank={c.rank} name={c.name} price={c.price_usd} />
      ))}
    </ul>
  );
};

export default CardList;
