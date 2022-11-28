import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import style from './HeaderCardButton.module.css';

export default function HeaderCardButton(props) {

  /* Realizamos conexion de los datos que tiene el cart-context */
  const cartCtx = useContext(CartContext);

  /* Obtenenmos cantidad de articulos agregados al carrito */
  const numberOfCartItems = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);


  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Carrito</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
}