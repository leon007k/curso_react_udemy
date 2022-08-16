import style from './InfoRow.module.css';

export default function InfoRow(props) {
  return (
    <p className={style.InfoRow}>{props.message}</p>
  );
}