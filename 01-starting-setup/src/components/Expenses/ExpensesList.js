import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {

  // * Validamos que existan gastos registrados
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">No se encontraron gastos. Favor de intentarlo de nuevo !!</h2>
  }

  return (
    <ul className="expenses-list">
      {
        props.data.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
      }
    </ul>
  );

}

export default ExpensesList;