import styled from "styled-components";

export const TimerContainer = styled.section`
  /* max-width: 300px; */
  width: ${({ isActive }) => (isActive ? "600px" : "300px")};
  height: ${({ isActive }) => (isActive ? "600px" : "300px")};
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
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

export const ReadingTimeContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${({ isActive }) => (isActive ? "40px" : "30px")};
`;

export const ButtonsContainer = styled.div`
  width: 10rem;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const PausePlayButton = styled.button`
  background-color: pink;
  color: rebeccapurple;
`;
export const ResetButton = styled.button`
  background-color: rebeccapurple;
  color: pink;
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.body};
  color: white;
`;
