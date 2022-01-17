import React from "react";
import Layout from "./components/Layout/Layout";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
