import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRoutes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import "./App.css";
import routes from "./config/routes";
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
