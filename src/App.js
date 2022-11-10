import React from "react";
import { useSelector } from "react-redux";
import Router from "router";
import { ThemeProvider } from "styled-components";
import { useTheme } from "theme";

function App() {
  const theme = useTheme();
  const mode = useSelector((state) => state.mode.mode);
  console.log({ mode });
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
export default App;
