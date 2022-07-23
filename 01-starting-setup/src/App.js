/**
 * ! Los nombres de los componentes deben comenzar con mayuscula. React los interpretara como componentes y no como elementos de html.
 */

import ExpenseItem from "./components/ExpenseItem";

function App() {
  /**
   * # Podemos obtener los datos dinamicamente, agregandolos dentro de nuestra funcion y pasarlos a nuestro componente
   * # como se muestra acontinuacion
   */
  const data = [
    {
      title: 'lavado de auto',
      amount: 140,
      date: new Date(2022, 1, 18)
    },
    {
      title: 'lavado de tenis',
      amount: 75,
      date: new Date(2022, 4, 30)
    },
    {
      title: 'despensa pequeña',
      amount: 201.50,
      date: new Date(2022, 4, 20)
    },
  ];
  return (
    <div>
      <h2>Primera prueba de archivo creado!</h2>
      <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date}></ExpenseItem>
      <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date}></ExpenseItem>
      <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date}></ExpenseItem>

    </div>
  );
}

export default App;
