import React from "react";
import style from "./Modal.module.css";

import ReactDOM from "react-dom";
import Button from "../Button/Button";

const Backdrop = ({ errHandler }) => {
  return <div className={style.backdrop} onClick={errHandler}></div>;
};

const Overlay = ({ msg, errHandler }) => {
  console.log(msg, errHandler);
  return (
    <div className={style.overlay}>
      <header> Error </header>

      <p> {msg.msg} </p>
      <footer>
        <Button onClick={errHandler}> I Understand</Button>
      </footer>
    </div>
  );
};

const Modal = ({ errMsg, errHandler }) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop errHandler={errHandler} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Overlay msg={errMsg} errHandler={errHandler} />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Modal;
