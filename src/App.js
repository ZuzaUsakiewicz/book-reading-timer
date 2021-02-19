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
          <ThemeButton onClick={() => toggleTheme()}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </ThemeButton>
        </Header>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
