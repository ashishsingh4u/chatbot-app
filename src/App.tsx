import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import "./App.css";
import routes from "./config/routes";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
      {routing}
    </ThemeProvider>
  );
}

export default App;
