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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonFont};
  border: none;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 30px;
  transition: opacity 0.4s ease-out;
  z-index: 999;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;

export const GlobalStyles = createGlobalStyle`
*, html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Play', sans-serif;
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
}
i {
  pointer-events: none;
}
label {
  padding: 0.5rem;
}
input {
  cursor: pointer;
  width: 30%;
  height: 8vh;
  border: 2px solid ${(props) => props.theme.fontColor};
  font-size: 2rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.body};
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}

`;
