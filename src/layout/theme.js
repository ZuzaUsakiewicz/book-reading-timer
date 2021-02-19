import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  buttonBG: "#000",
  buttonFont: "#fff",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  buttonBG: "#fff",
  buttonFont: "#000",
};

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
`;
