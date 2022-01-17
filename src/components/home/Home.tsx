import React from "react";
import IPage from "../../interfaces/page";

import "./Home.css";

const Home: React.FC<IPage> = (props: IPage): JSX.Element => {
  return <div className="Home-header">{props.name}</div>;
};

export default Home;
