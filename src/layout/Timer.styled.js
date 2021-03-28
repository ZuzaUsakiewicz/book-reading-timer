import styled from "styled-components";

export const TimerContainer = styled.section`
  width: 100%;
  height: 70vh;
  max-width: 500px;
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StartInputsContainer = styled.form`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ReadingTimeContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ isActive }) => (isActive ? "4em" : "2rem")};
`;

export const ButtonsContainer = styled.div`
  width: 10rem;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 1rem 0;
`;

export const PausePlayButton = styled.button`
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonFont};
  padding: 1rem;
  font-size: 2rem;
`;
export const ResetButton = styled.button`
  background-color: ${(props) => props.theme.buttonBG};
  color: ${(props) => props.theme.buttonFont};
  padding: 1rem;
  font-size: 2rem;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 0.5rem 0;
  }
`;
export const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.fontColor};
`;
