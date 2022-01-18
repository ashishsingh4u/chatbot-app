import React from "react";
import IPage from "../../interfaces/Page";
import "./Category.css";

function Category(props: IPage) {
  const { name } = props;

  return <div className="Category-header">{name}</div>;
}

export default Category;
