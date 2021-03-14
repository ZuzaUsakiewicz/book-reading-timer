import React from "react";
import {
  ModalContainer,
  StartInputsContainer,
  TimerContainer,
} from "../layout/Timer.styled";

const Modal = ({ getEndPage, pages, endPages, closeModal }) => {
  return (
    <ModalContainer>
      <StartInputsContainer>
        <TimerContainer>
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
          <h2>You've read: {endPages - pages} pages</h2>
          <h2>
            It's average {((endPages - pages) / pages).toFixed(1)} page per
            minute
          </h2>
          <h2>
            If you spend one hour reading, you will read{" "}
            {(((endPages - pages) / endPages) * 60).toFixed()} pages
          </h2>

          <button onClick={closeModal}>set up reading</button>
        </TimerContainer>
      </StartInputsContainer>
    </ModalContainer>
  );
};

export default Modal;
