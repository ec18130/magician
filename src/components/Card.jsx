import React from "react";
import "./Card.css";

const Card = (props) => {
  const cardColour = props.handColour;
  console.log(cardColour);
  return (
    <div className="card">
      {/* TOP CARD NUMBER */}
      <h1 className="cardnumber" style={{ color: `${cardColour}` }}>
        {props.handNumber}
      </h1>
      {/* CARD SUIT SYMBOL */}
      <div className="suitsign" style={{ color: `${cardColour}` }}>
        {props.handIcon}
      </div>
      {/* BOTTOM CARD NUMER */}
      <h1 className="cardnumber bottom" style={{ color: `${cardColour}` }}>
        {props.handNumber}
      </h1>
    </div>
  );
};

export default Card;
