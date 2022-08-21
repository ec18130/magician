import React from "react";
import ShowCards from "./ShowCards";

const DrawnCards = (props) => {
  return (
    <div>
      <ShowCards showcards={props.getdrawnCard} />
    </div>
  );
};

export default DrawnCards;
