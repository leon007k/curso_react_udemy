import './ExpenseDate.css';

function ExpenseDate(props) {
  /**
  * # toLocalString,devuelve un cadena con la representación al idioma de la fecha especificada, se ingresa la localidad y la opcion
  * # getFullYear, devuelve el año de la fecha indicada acorde a la hora local.
  */

  const month = props.date.toLocaleString('es-MX', { month: 'long' });
  const day = props.date.toLocaleString('es-MX', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;