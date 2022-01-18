import React from "react";
import { useRoutes } from "react-router-dom";
import { Theme, ThemeProvider } from "@mui/material";

import Layout from "./components/layout/Layout";
import "./App.css";
import Routes from "./config/Routes";
import { ThemeContext, Themes } from "./config/Theme-Context";
// import { styled } from "@mui/material/styles";
// import { orange } from "@mui/material/colors";
// import { Checkbox } from "@mui/material";

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   "&.Mui-checked": {
//     color: theme.status.danger,
//   },
// }));

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

// export default function CustomStyles() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CustomCheckbox defaultChecked />
//     </ThemeProvider>
//   );
// }

function App() {
  const routing = useRoutes(Routes);

  const [toggleTheme, setToggleTheme] = React.useState<Theme>(Themes.darkTheme);

  const toggleContextTheme = (): void => {
    setToggleTheme(
      toggleTheme === Themes.darkTheme ? Themes.lightTheme : Themes.darkTheme
    );
  };

  const state = {
    theme: toggleTheme,
    toggleTheme: toggleContextTheme,
  };

  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider theme={toggleTheme}>
        <Layout />
        {routing}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
