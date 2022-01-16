import React from "react";
import Layout from "./components/Layout";

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
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
