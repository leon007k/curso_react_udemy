import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../IU/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expense.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.data.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
      {/* <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}></ExpenseItem>
      <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}></ExpenseItem>
      <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}></ExpenseItem>
      <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;