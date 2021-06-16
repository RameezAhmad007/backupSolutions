import React from "react";
import "./styles.scss";
const Button = (props) => {
  const { text = "text" } = props;
  return <button className="button">{text}</button>;
};

export default Button;
