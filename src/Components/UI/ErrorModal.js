import React, { Fragment } from "react";
import Card from "./Card";
import style from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
import Button from "./Button";

function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onDesmiss} />;
}

function ModalOverlay(props) {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onDesmiss}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    // (portal) to render the Backdrop and ModalOverlay to the top
    // pointer to real-dom with id created in index.html
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onDesmiss={props.onDesmiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} message={props.message} onDesmiss={props.onDesmiss}/>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
