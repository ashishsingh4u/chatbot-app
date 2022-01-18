import React from "react";
import { useRoutes } from "react-router-dom";
import { Theme, ThemeProvider } from "@mui/material";

import Layout from "./components/layout/Layout";
import "./App.css";
import routes from "./config/routes";
import { ThemeContext, themes } from "./config/theme-context";
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
  const routing = useRoutes(routes);

  const [toggleTheme, setToggleTheme] = React.useState<Theme>(themes.darkTheme);

  const toggleContextTheme = (): void => {
    setToggleTheme(
      toggleTheme === themes.darkTheme ? themes.lightTheme : themes.darkTheme
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
