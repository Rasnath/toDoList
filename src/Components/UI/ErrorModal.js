import Card from "./Card";
import style from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onDesmiss} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <button onClick={props.onDesmiss}>Okay</button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
