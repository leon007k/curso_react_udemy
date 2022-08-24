import React, { useState, useRef } from "react";
import Card from "../IU/Card";
import Button from "../IU/Button";
import Modal from "../IU/Modal";
import style from "./UserInfo.module.css";

export default function UserInfo(props) {

  /*
  # REACT HOOKS - USEREF
  * se usa principalmente para crear una referencia del elemento DOM 
  * o acceder directamente a el dentro de un componente funcional
  * Devuelve un objeto de refenrencia mutable que llevara el valor a lo largo del componente
  */
  const nameInputRef = useRef(),
    ageInputRef = useRef();

  // * We validate that age is correct
  const [isValid, setIsValid] = useState({
    validName: true,
    validAge: true
  });

  // * State to show a different message according to the error presented
  const [errorMessage, setErrorMessage] = useState('');

  // * Functions for data capture and shipping
  const submitHandler = (evt) => {
    evt.preventDefault();

    /*
    * El valor que nos devuelve este hook, lo podemos tomar de current.value
    */
    let enteredName = nameInputRef.current.value,
      enteredAge = ageInputRef.current.value,
      UserInfo;
    debugger
    // * Validation of the data entered
    switch (true) {
      case (enteredName.trim().length === 0 && enteredAge.trim().length === 0):
        setIsValid((prevData) => {
          return {
            ...prevData,
            validName: false
          }
        });
        setErrorMessage({
          messageTitle: 'Datos incompletos',
          messageBody: <p>Disculpe las molestias, requerimos que ingrese todos sus datos correctamente</p>
        });
        break;
      case (enteredName.trim().length === 0):
        setIsValid((prevData) => {
          return {
            ...prevData,
            validName: false
          }
        });
        setErrorMessage({
          messageTitle: 'Dato incompleto',
          messageBody: <p>Disculpe las molestias, requerimos que ingrese su nombre completo correctamente</p>
        });
        break;
      case (enteredAge.trim().length === 0 || parseInt(enteredAge.trim()) < 1):
        setIsValid((prevData) => {
          return {
            ...prevData,
            validAge: false
          }
        });
        break;
      default:
        // * We send the data only if they are correct
        UserInfo = {
          key: Math.random(),
          name: enteredName,
          age: enteredAge
        };
        props.onAddNewUser(UserInfo);
        // * Once the data is sent, we empty the fields
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        break;
    }
  };

  const errorHandler = () => {
    setErrorMessage(null);
  };
  /*
    * Para mostral el modal, se hace uso de un estado, el cual contendra el mensaje del error presentado,
    * validamos, que el error sea una "cosa-thing" y si lo es, entonces mostraras el modal, con el respectivo mensaje
   */
  return (
    <>
      {errorMessage && <Modal messageTitle={errorMessage.messageTitle} messageBody={errorMessage.messageBody} closeModal={errorHandler} />}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={style.add__newUser}>
            <div className={style.add__newUser_inputContainer}>
              <label htmlFor="userName" className={style.add__newUser_formLabel}>Nombre completo:</label>
              <input id="userName" type="text"
                className={style.add__newUser_formControl}
                ref={nameInputRef}
              />
            </div>
            <div className={style.add__newUser_inputContainer}>
              <label htmlFor="userAge" className={style.add__newUser_formLabel}>Edad (años):</label>
              <input id="userAge"
                className={`${style.add__newUser_formControl} ${!isValid.validAge && style.invalid}`}
                ref={ageInputRef}
                type="number" min="1" />
              {!isValid.validAge && <div className={style.add_newUser_formText}>Ingresa una edad correcta</div>}
            </div>
          </div>
          <div className={style.add__newUser_actions}>
            <Button type="submit" className={style.add__newUser_success} Message={"Agregar usuario"} />
          </div>
        </form>
      </Card>
    </>
  );
}