/**
 * ! Los nombres de los componentes deben comenzar con mayuscula. React los interpretara como componentes y no como elementos de html.
 */

import Expenses from "./components/Expenses/Expenses";

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
      <Expenses data={data} />
    </div>
  );
}

export default App;
