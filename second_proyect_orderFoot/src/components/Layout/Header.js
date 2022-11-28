import HeaderCartButton from './HeaderCartButton';
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'

export default function Header(props) {

  return (
    <>
      <header className={style.header}>
        <h1>React OrderFoot</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style['main-image']}>
        <img src={mealsImage} alt="buffet" />
      </div>
    </>
  );
}