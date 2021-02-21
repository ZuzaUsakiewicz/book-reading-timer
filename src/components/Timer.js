import React, { useState, useEffect } from "react";
import { TimerContainer, StartInputsContainer } from "../layout/Timer.styled";

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [pages, setPages] = useState(0);
  const [endPage, setEndPage] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);

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
  }
  function getPages(e) {
    e.preventDefault();
    setPages(e.target.value >= 0 ? e.target.value : 0);
  }
  function getEndPage(e) {
    e.preventDefault();
    setEndPage(e.target.value);
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
            alert("that's end!");
            //modal!!
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
    <TimerContainer>
      {minutes === 0 && seconds === 0 ? (
        "Finished!" && (
          <div>
            <h2>{endPage}</h2>
            <input
              type="number"
              className="pages"
              max="10000"
              min="0"
              onChange={getEndPage}
              required
            />
          </div>
        )
      ) : (
        <>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </>
      )}
      <button className="start" onClick={timerStart}>
        {isActive ? "Stop" : "Start"}
      </button>
      <button className="reset" onClick={timerReset}>
        Reset
      </button>
      {isActive && (
        <>
          <span>You've start from: {pages} page</span>
          <h3>Reading Time!!!</h3>
        </>
      )}

      {!isActive && (
        <StartInputsContainer>
          <label>How long you want to read?</label>
          <input
            type="number"
            className="number"
            min="1"
            max="60"
            onChange={getNumbers}
            placeholder={30}
            required
          />
          <label>Type starting page:</label>
          <input
            type="number"
            className="pages"
            min="0"
            max="10000"
            onChange={getPages}
            placeholder={0}
            required
          />
        </StartInputsContainer>
      )}
    </TimerContainer>
  );
};

export default Timer;
