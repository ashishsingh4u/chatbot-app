import React from "react";
import IPage from "../../interfaces/page";

import "./Admin.css";

function Admin(props: IPage) {
  const { name } = props;

  return <div className="Admin-header">{name}</div>;
}

export default Admin;
