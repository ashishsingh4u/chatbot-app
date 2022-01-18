import React from "react";
import { useRoutes } from "react-router-dom";
import { PaletteMode } from "@mui/material";

import Layout from "./components/layout/Layout";
import "./App.css";
import Routes from "./config/Routes";
import { ThemeContext } from "./config/Theme-Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const routing = useRoutes(Routes);

  const [mode, setMode] = React.useState<"light" | "dark">("dark");

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#3f51b5",
            },
            secondary: {
              main: "#f50057",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#3c3c3c",
            },
            secondary: {
              main: "#12ef91",
            },
          }),
    },
  });

  const colorMode = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode: string) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Layout />
        {routing}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
