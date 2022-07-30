/*
# REACT HOOKS
* esto permitira poder hacer uso de los estados, permitiendo que esta funcion se ejecute de nuevo,
*para mostrar los cambios que se generan con un evento */
// import React, { useState } from 'react';

/**
 * # Al crear el archivo de css, lo debemos mandar a llamar dentro de nuestro js del componente
 * # para ingresar las clases se declaran como className
 * # los props, seran los parametros que recibira la funcion de nuestro componente. Estos han sido mandados desde la funcion app
 */
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../IU/Card';

function ExpenseItem(props) {

  /*
  # REACT HOOKS
  * useState,nos permitira volver a ejecutar esta funcion, cambiando el valor(estado).
  * Se le pasa como parametro el valor(estado) a cambiar.
  * Este nos devuelve dos valores, SIEMPRE. Uno es el primer valor de la variable y el otro es una funcion que permite
  * cambiar dos cosas, cambiar el valor(estado) de la varible y ejecutar la funcion de nuevo. Retorna un array
  */
  /* const [title, setTitle] = useState(props.title);
 */
  /*  const clickHandler = () => {
     /*
     # REACT HOOKS
     * Dentro de nuestra funcion o evento que vallamos a ejecutar para cambiar el valor, mandamos a llamar a la funcion
     * que permite cambiar el valor(estado) de la variable y a su vez ejecutar de nuevo la funcion de este componente
     setTitle('Updated!!!');
     console.log(title);
   }; */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;