import React, { useState } from 'react';
import Card from '../IU/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expense.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('all');

  // * actualizamos el año seleccionado
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  // * Filtramos la lista de gasto por año
  const filteredExpenses = props.data.filter(expense => {
    // * si el usuario elije la primera opcion "Elije un año", se mostraran todos los gastos registrados
    if (filteredYear === 'all') {
      return expense.date.getFullYear() >= Math.min(expense.date.getFullYear());
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  /**
   * * Para que React pueda identificar cada uno de los elementos del array, y agregarlos correctamente
   * * se requiere obtener un key, para cada uno de ellos, esto evitaria tener bugs, ya que por ejem. si un elemento
   * * tiene alguna funcion en especifico, y al agregar otro mediante un arreglo, este perderia su funcion y la tomaria otro.
   */

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList data={filteredExpenses} />
    </Card>
  );
}

export default Expenses;