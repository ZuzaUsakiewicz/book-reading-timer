import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "rgb(231, 232, 237)",
  fontColor: "rgb(26, 39, 68)",
  buttonBG: "rgb(26, 39, 68)",
  buttonFont: "#fff",
};

export const darkTheme = {
  body: "rgb(26, 39, 68)",
  fontColor: "rgb(231, 232, 237)",
  buttonBG: "rgb(231, 232, 237)",
  buttonFont: "rgb(26, 39, 68)",
};

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  padding: 20px;
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonFont};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 30px;
  transition: opacity 0.4s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const GlobalStyles = createGlobalStyle`
*, html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
body {
    background-color: ${(props) => props.theme.body};
    transition: background-color 0.3s ease-in;
    color: ${(props) => props.theme.fontColor};
}
h1 {
    color: ${(props) => props.theme.fontColor};
}
button {
  cursor: pointer;
  border: none;
  font-size: 30px;
  width: 50px;
  height: 50px;
}
i {
  pointer-events: none;
}
`;
