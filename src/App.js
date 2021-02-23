import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  AppContainer,
  ThemeButton,
  Header,
} from "./layout/theme";
import { FiSun, FiMoon } from "react-icons/fi";
import Timer from "./components/Timer";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <h2>Book Time!</h2>
          <ThemeButton onClick={() => toggleTheme()}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </ThemeButton>
        </Header>
        <Timer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
