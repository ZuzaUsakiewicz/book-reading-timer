import React, { useState, useEffect } from "react";
import {
  TimerContainer,
  StartInputsContainer,
  ReadingTimeContainer,
  ButtonsContainer,
  PausePlayButton,
  ResetButton,
  Modal,
} from "../layout/Timer.styled";
import { RiPlayFill, RiStopFill, RiPauseFill } from "react-icons/ri";

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [pages, setPages] = useState(1);
  // const [book, setBook] = useState([]);
  const [endPages, setEndPages] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [modal, setModal] = useState(false);

  function getNumbers(e) {
    e.preventDefault();
    setMinutes(e.target.value > 0 ? e.target.value : 1);
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
  // function createBook() {
  //   setBook([].push(<FiBook />));
  // }
  function getPages(e) {
    e.preventDefault();
    setPages(e.target.value >= 0 ? e.target.value : 1);
  }
  function getEndPage(e) {
    e.preventDefault();
    setEndPages(e.target.value);
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
            // createBook();
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
            <Modal>
              <label>Type your end page:</label>
              <input
                type="number"
                className="pages"
                max="10000"
                min="1"
                onChange={getEndPage}
                required
              />
              <span>{endPages}</span>
              <button onClick={closeModal}>set up reading</button>
            </Modal>
          )
        : ""}
      {isActive && (
        <ReadingTimeContainer>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>

          <span>You've start from: {pages} page</span>
          <h3>Reading Time!!!</h3>
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
          <h1>{pages}</h1>
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
      {/* {book.map((item) => {
        return (
          <>
            <span>{item} </span>
          </>
        );
      })} */}
    </TimerContainer>
  );
};

export default Timer;
