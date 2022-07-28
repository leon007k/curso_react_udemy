/**
 * ! Los nombres de los componentes deben comenzar con mayuscula. React los interpretara como componentes y no como elementos de html.
 */
import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

/**
 * # Podemos obtener los datos dinamicamente, agregandolos dentro de nuestra funcion y pasarlos a nuestro componente
 * # como se muestra acontinuacion
 */
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'lavado de auto',
    amount: 140,
    date: new Date(2022, 1, 18)
  },
  {
    id: 'e2',
    title: 'lavado de tenis',
    amount: 75,
    date: new Date(2022, 4, 30)
  },
  {
    id: 'e3',
    title: 'despensa pequeña',
    amount: 201.50,
    date: new Date(2022, 4, 20)
  },
  {
    id: 'e4',
    title: 'proteina nitrotech',
    amount: 998.50,
    date: new Date(2021, 8, 15)
  },
  {
    id: 'e5',
    title: 'Galletas Maria',
    amount: 99.50,
    date: new Date(2022, 7, 27)
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  /**¨
   * * Para pasar los datos que se reciben un en archivo hijo, a otro archivo hijo(de una raiz a otra). Debemos mandar los datos
   * * al archivo padre, para que este los mande al otro hijo, ya que no se puede hacer conexion entre archivos raiz separados, solo
   * * se puede hacer entre archivos raiz que esten conectados en una misma linea
   */
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
