import React, { useState } from "react";
import Card from "../IU/Card";
import Button from "../IU/Button";
import Modal from "../IU/Modal";
import style from "./UserInfo.module.css";

export default function UserInfo(props) {

  const [userData, setUserData] = useState({
    userName: '',
    userAge: ''
  });

  // * We validate that age is correct
  const [isValid, setIsValid] = useState({
    validName: true,
    validAge: true
  });

  // * State to show a different message according to the error presented
  const [errorMessage, setErrorMessage] = useState('');

  // * Functions for data capture and shipping
  const NameChangeHandler = evt => {
    setUserData(prevData => {
      return {
        ...prevData,
        userName: evt.target.value
      };
    });
    setIsValid((prevData) => {
      return {
        ...prevData,
        validName: true
      };
    });
  };

  const AgeChangeHandler = (evt) => {
    setUserData(prevData => {
      return {
        ...prevData,
        userAge: evt.target.value
      };
    });
    setIsValid(prevData => {
      return {
        ...prevData,
        validAge: true
      };
    });
  };


  const submitHandler = (evt) => {
    evt.preventDefault();

    let UserInfo;
    //debugger
    // * Validation of the data entered
    switch (true) {
      case (userData.userName.trim().length === 0 && userData.userAge.trim().length === 0):
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
      case (userData.userName.trim().length === 0):
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
      case (userData.userAge.trim().length === 0 || parseInt(userData.userAge.trim()) < 1):
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
          name: userData.userName,
          age: userData.userAge
        };
        props.onAddNewUser(UserInfo);
        // * Once the data is sent, we empty the fields
        setUserData({
          userName: '',
          userAge: ''
        });
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
              <input id="userName" type="text" value={userData.userName} onChange={NameChangeHandler} className={style.add__newUser_formControl} />
            </div>
            <div className={style.add__newUser_inputContainer}>
              <label htmlFor="userAge" className={style.add__newUser_formLabel}>Edad (años):</label>
              <input id="userAge" value={userData.userAge} onChange={AgeChangeHandler} className={`${style.add__newUser_formControl} ${!isValid.validAge && style.invalid}`} type="number" min="1" />
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