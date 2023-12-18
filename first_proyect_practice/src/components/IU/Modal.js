import Button from './Button';
import style from './Modal.module.css';

export default function Alert(props) {

  let showModal, animationClose;
  if (props.closeModal != null) {
    showModal = `${style.show} ${style.fade}`;
  } else {
    animationClose = `${style["modal-animation-close"]}`;
  }

  return (
    <div className={`${style.modal} ${showModal}`} role="dialog" aria-label="Modal" onClick={props.closeModal}>
      <div className={`${style["modal-dialog"]} ${animationClose}`}>
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
    </div>
  );
}