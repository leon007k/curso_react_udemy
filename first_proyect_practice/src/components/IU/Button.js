import style from './Button.module.css';

export default function Button(props) {

  return (
    <button className={`${style.btn} ${props.className}`} type={props.type} onClick={props.onClick}>{props.Message}</button>
  );
}