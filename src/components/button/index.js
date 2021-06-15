import React from "react";
import "./style.css";
const Button = (props) => {
  const { text = "text" } = props;
  return <button className="button">{text}</button>;
};

export default Button;
