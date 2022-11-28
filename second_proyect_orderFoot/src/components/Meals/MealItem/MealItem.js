import MealItemForm from './MealItemForm';
import style from './MealItem.module.css';

export default function MealItem(props) {
  /* Redondeamos el precio */
  const price = `$${props.price.toFixed(2)}`;

  return (
    <>
      <li className={style.meal}>
        <div>
          <h3>{props.foodName}</h3>
          <div className={style.description}>{props.description}</div>
          <div className={style.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} />
        </div>
      </li>
    </>
  );
}