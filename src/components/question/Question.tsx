import React from "react";
import IPage from "../../interfaces/Page";
import "./Question.css";

function Question(props: IPage) {
  const { name } = props;

  return <div className="Question-header">{name}</div>;
}

export default Question;
