import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {

  // * Obtenemos los datos que ha ingresado el usuario para mandarlos al arr principal
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    // * Obtenemos los datos para mandarlo al archivo principal (App.js)
    props.onAddExpense(expenseData);

    // * Ocultamos el formulario
    setNewExpenses(false);
  };

  // * Cambio de plantilla para agregar un nuevo gasto
  const [newExpenses, setNewExpenses] = useState(false);

  const AddNewExpense = () => {
    setNewExpenses(true);
  };

  const CancelNewExpense = () => {
    setNewExpenses(false);
  }

  let createNewExpense;
  if (newExpenses === true) {
    createNewExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelNewExpense} />;
  } else {
    createNewExpense = <button onClick={AddNewExpense}>Agregar nuevo gasto</button>
  }

  return (
    <div className="new-expense">
      {createNewExpense}
    </div>
  );
}

export default NewExpense;