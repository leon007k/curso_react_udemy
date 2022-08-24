import Button from './Button';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

export default function Alert(props) {

  const Backdrop = (props) => {
    return (
      <div className={`${style.modal} ${showModal}`} role="dialog" aria-label="Backdropbackdrop" onClick={props.closeModal}></div>
    );
  }

  const ModalOverlay = (props) => {
    return (
      <div className={`${style["modal-dialog"]} ${animationClose}`} onClick={props.closeModal}>
        <div className={style["modal-content"]}>
          <div className={style["modal-header"]}>
            <h5 className={style["modal-title"]}>{props.messageTitle}</h5>
          </div>
          <div className={style["modal-body"]}>
            {props.messageBody}
          </div>
          <div className={style["modal-footer"]}>
            <Button type="button" className={style["btn-primary"]} Message={"Aceptar"} onClick={props.closeModal} />
          </div>
        </div>
      </div>
    );
  }

  let showModal, animationClose;
  if (props.closeModal != null) {
    showModal = `${style.show} ${style.fade}`;
  } else {
    animationClose = `${style["modal-animation-close"]}`;
  }

  /**
   * * createPortal permite agregar elementos secundarios en un nodo DOM que existe fuera de la jerarquia DOM del 
   * * componente principal, como en este caso que se crea un div fuera del div root
   * * El primer parametro que recibe es cualquier elemento secundario de React renderizable, como un elemento, cadena o fragmento
   * * El segundo parametro que recibe es el elemento DOM donde se mostrara 
   */
  return (
    <>
      {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay messageTitle={props.messageTitle} messageBody={props.messageBody} closeModal={props.closeModal} />,
        document.getElementById('overlay-root'))}
    </>
  );
}