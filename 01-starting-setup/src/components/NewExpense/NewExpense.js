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
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;