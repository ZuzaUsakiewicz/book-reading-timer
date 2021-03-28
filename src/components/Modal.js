import React from "react";
import {
  ModalContainer,
  StartInputsContainer,
  TimerContainer,
  ModalButton,
} from "../layout/Timer.styled";
import { BiRepeat } from "react-icons/bi";

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
          <h4>You've read: {endPages - pages} pages</h4>
          <h4>
            It's average {((endPages - pages) / pages).toFixed(1)} page per
            minute
          </h4>
          <h4>
            If you spend one hour reading, <br />
            you will read {(
              ((endPages - pages) / endPages) *
              60
            ).toFixed()}{" "}
            pages
          </h4>

          <ModalButton onClick={closeModal}>
            <BiRepeat />
          </ModalButton>
        </TimerContainer>
      </StartInputsContainer>
    </ModalContainer>
  );
};

export default Modal;
