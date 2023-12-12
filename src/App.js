import React from "react";
import { useSelector } from "react-redux";
import Router from "router";
import { ThemeProvider } from "styled-components";
import { useTheme } from "theme";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const theme = useTheme();
  const mode = useSelector((state) => state.mode.mode);
  AOS.init({
    offset: 100,
    duration: 700,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
export default App;
