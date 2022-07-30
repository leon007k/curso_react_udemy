import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  /**
   * # REACT HOOKS
   * * para este caso usamos los estados para guardar el valor que ha ingresado el usuario,
   * * y poder enviarlo posteriormente
   */
  // ! Forma 1, de manejar varios estados 
  /* const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (evt) => { setEnteredTitle(evt.target.value); }

  const numberChangeHandler = (evt) => { setEnteredNumber(evt.target.value); }

  const dateChangeHandler = (evt) => { setEnteredDate(evt.target.target); } */

  // ! Forma 2 de manejar varios estados. Estos se manejan como un objeto
  // * funciones para obtener los valores ingresados
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredNumber: '',
    enteredDate: ''
  }
  );

  const titleChangeHandler = (evt) => {
    /* setUserInput({
      ...userInput,
      enteredTitle: evt.target.value
    }); */
    /**
     * ! Para realizar un cambio de estado, cada uno de ellos depende del otro. Para evitar tener problemas
     * ! en que algun estado no cambie, se debe hacer de la siguiente manera
     */
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: evt.target.value };
    });
  };

  const numberChangeHandler = (evt) => {
    /* setUserInput({
      ...userInput,
      enteredNumber: evt.target.value
    }); */
    setUserInput((prevState) => {
      return { ...prevState, enteredNumber: evt.target.value }
    });
  };

  const dateChangeHandler = (evt) => {
    setUserInput({
      ...userInput,
      enteredDate: evt.target.value
    });
  };

  // * evento para enviar los datos del formulario
  const submitHandler = (evt) => {
    evt.preventDefault();

    // * new Date(variable + 'T00:00:00'), para que agregue la fecha correctamente
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredNumber,
      date: new Date(userInput.enteredDate + 'T00:00:00')
    };

    // * obtenemos los datos para mandarlo al archivo newExpense.js
    props.onSaveExpenseData(expenseData);

    // @ Una vez ingresados los valores, vaciamos los inputs
    setUserInput({
      enteredTitle: '',
      enteredNumber: '',
      enteredDate: ''
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Articulo </label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Precio </label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredNumber} onChange={numberChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Fecha </label>
          <input type="date" min="2021-01-01" max="2024-12-30" value={userInput.enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancelar</button>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;