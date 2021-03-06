import React, { useState, useEffect } from "react";
import {
  TimerContainer,
  StartInputsContainer,
  ReadingTimeContainer,
  ButtonsContainer,
  PausePlayButton,
  ResetButton,
} from "../layout/Timer.styled";
import { RiPlayFill, RiStopFill, RiPauseFill } from "react-icons/ri";
import Modal from "./Modal";

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [pages, setPages] = useState(1);
  const [endPages, setEndPages] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [modal, setModal] = useState(false);

  function getNumbers(e) {
    e.preventDefault();
    setMinutes(e.target.value >= 1 ? e.target.value : 1);
    setSeconds(0);
  }

  function timerStart() {
    setIsActive((prev) => !prev);
  }

  function timerReset() {
    setIsActive(false);
    setMinutes(30);
    setSeconds(0);
    setPages(1);
  }

  function closeModal() {
    setModal(false);
    timerReset();
  }

  function getPages(e) {
    e.preventDefault();
    setPages(e.target.value >= 1 ? e.target.value : 1);
  }
  function getEndPage(e) {
    e.preventDefault();
    setEndPages(e.target.value >= 1 ? e.target.value : 1);
  }
  useEffect(() => {
    if (isActive) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setModal(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });
  return (
    <TimerContainer isActive={isActive}>
      {minutes === 0 && seconds === 0
        ? { modal } && (
            <Modal
              getEndPage={getEndPage}
              pages={pages}
              endPages={endPages}
              closeModal={closeModal}
              setEndPages={setEndPages}
            />
          )
        : ""}
      {isActive && (
        <ReadingTimeContainer>
          <p>Keep reading!</p>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </ReadingTimeContainer>
      )}
      {!isActive && (
        <StartInputsContainer>
          <label>How long you want to read?</label>
          <input
            autoFocus="true"
            type="number"
            className="number"
            min="1"
            max="60"
            onChange={getNumbers}
            placeholder={30}
            required
          />
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <label>Type starting page:</label>
          <input
            type="number"
            className="pages"
            min="1"
            max="10000"
            onChange={getPages}
            placeholder={1}
            required
          />
        </StartInputsContainer>
      )}
      <ButtonsContainer>
        <PausePlayButton onClick={timerStart}>
          {isActive ? <RiPauseFill /> : <RiPlayFill />}
        </PausePlayButton>
        <ResetButton onClick={timerReset}>
          <RiStopFill />
        </ResetButton>
      </ButtonsContainer>
    </TimerContainer>
  );
};

export default Timer;
