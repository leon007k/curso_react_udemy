import Modal from '../UI/Modal';
import style from './Cart.module.css';

export default function Cart(props) {
  const cartItems = <ul className={style['cart-items']}>{
    [
      { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
    ].map((item) => <li>{item.name}</li>)
  }</ul>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={style.total}>
        <span>Cantidad Total</span>
        <span>32.62</span>
      </div>
      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onHideCart}>Cancelar</button>
        <button className={style.button}>Ordenar</button>
      </div>
    </Modal>
  );
};