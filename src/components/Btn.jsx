import React from "react";


//button template
const Btn = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Btn;
