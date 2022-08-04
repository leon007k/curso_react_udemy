import React from 'react';
import Chart from '../Chart/Chart';

function ExpensesChart(props) {

  const chartData = [
    { label: 'Ene', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Abr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Ago', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dic', value: 0 },
  ];

  // * Se recorren los valores recibidos, para obtener los gastos por mes, y asignarlos al chartData
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // * empieza en 0 => enero = 0
    chartData[expenseMonth].value += expense.amount;
  }

  console.log(chartData);
  return <Chart data={chartData} />;
}

export default ExpensesChart;