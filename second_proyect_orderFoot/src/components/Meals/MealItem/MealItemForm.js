import { useRef } from 'react';
import Input from '../../UI/Input';
import style from './MealItemForm.module.css';

export default function MealItemForm(props) {

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
  };

  const inputProps = {
    ref: amountInputRef,
    id: 'amount_' + props.id,
    type: 'number',
    min: '1',
    max: '10',
    step: '1',
    defaultValue: '1'
  };

  return (
    <>
      <form className={style.form} onSubmit={submitHandler}>
        <Input label="Cantidad" input={inputProps} />
        <button>Agregar</button>
      </form>
    </>
  );
};