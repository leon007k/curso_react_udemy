/**
 * # Al crear el archivo de css, lo debemos mandar a llamar dentro de nuestro js del componente
 * # para ingresar las clases se declaran como className
 * # los props, seran los parametros que recibira la funcion de nuestro componente. Estos han sido mandados desde la funcion app
 */
import './ExpenseItem.css';

function ExpenseItem(props) {
  /*const espenseDate = new Date(2022, 2, 28);
  const expenseTitle = 'Lavado del auto';
  const expensePrice = 140.00;*/

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;