import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const modalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
      )}
    </Fragment>
  );
};

export default Modal;
