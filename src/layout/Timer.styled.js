import styled from "styled-components";

export const TimerContainer = styled.section`
  /* max-width: 300px; */
  width: ${({ isActive }) => (isActive ? "600px" : "300px")};
  height: ${({ isActive }) => (isActive ? "600px" : "300px")};
  background-color: coral;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.7s ease-in-out;
`;

export const StartInputsContainer = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: black;
  color: white;
`;
