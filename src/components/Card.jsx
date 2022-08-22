import cardcss from "./Card.module.css";
import { useState } from "react";

const Card = (props) => {
  const cardColour = `${props.handColour}`;
  const [disable, setDisabled] = useState(false);

  function handleClick() {
    setDisabled(true);
    props.handleChoice(props.indexValue);
  }

  //rendering the card template including propsç
  return (
    <div
      className={`${cardcss.card} ${disable ? cardcss.stop : null}`}
      onClick={handleClick}
    >
      {/* TOP CARD NUMBER */}
      <h1
        className={cardcss.cardnumber}
        style={{
          color: `${cardColour}`,
          zIndex: `${props.indexValue}`,
        }}
      >
        {props.handNumber}
      </h1>
      {/* CARD SUIT SYMBOL */}
      <div className={cardcss.suitsign} style={{ color: `${cardColour}` }}>
        {props.handIcon}
      </div>
      {/* BOTTOM CARD NUMER */}
      <h1
        className={`${cardcss.cardnumber} ${cardcss.bottom}`}
        style={{ color: `${cardColour}` }}
      >
        {props.handNumber}
      </h1>
    </div>
  );
};

export default Card;
