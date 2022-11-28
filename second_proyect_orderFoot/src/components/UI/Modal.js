import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const Backdrop = props => {
  return <div className={style.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverLay = props => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </>
  );
}