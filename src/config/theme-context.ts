import { createTheme } from "@mui/material";
import React from "react";

export const themes = {
  darkTheme: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  }),
  lightTheme: createTheme({
    palette: {
      mode: "light",
    },
  }),
};

export const ThemeContext = React.createContext({
  theme: themes.darkTheme,
  toggleTheme: () => {},
});
