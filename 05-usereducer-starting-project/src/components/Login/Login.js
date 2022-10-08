import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Inputs from '../UI/Inputs/Inputs';

// * funcion para validar el correo ingresado
const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT': {
      return {
        value: action.val,
        isValid: action.val.includes('@')
      }
    }
    case 'INPUT_BLUR': {
      return {
        value: state.value,
        isValid: state.value.includes('@')
      }
    }
    default: {
      return {
        value: '',
        isValid: false
      }
    }
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PASSWORD': {
      return {
        value: action.val,
        isvalid: action.val.trim().length > 6
      }
    }
    case 'INPUT_BLUR': {
      return {
        value: state.value,
        isValid: state.value.trim().length > 6
      }
    }
    default: {
      return {
        value: '',
        isValid: false
      }
    }
  }
};

const Login = () => {
  /*  const [enteredEmail, setEnteredEmail] = useState('');
   const [emailIsValid, setEmailIsValid] = useState(); */
  /* const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  const authctx = useContext(AuthContext);;
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // * manejo de los datos ingresado por useReducer
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  // * Obtenemos los valores del objeto solo cuando isValid cambia
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {

    const identifier = setTimeout(() => {
      console.log('se creo el efecto secundario');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 50);

    /*
    * Esta seccion nos permite que no se realizen varias peticiones cada vez que el usuario teecle algo
    * permitiendo reiniciar el temporizador y ejecutarlo solo hasta que haya pasado determinado tiempo
    */
    return () => {
      console.log('Se ha borrado el efecto secundario');
      clearTimeout(identifier);
    }

  }, [emailIsValid, passwordIsValid]);

  // * obtenemos los datos del usuario
  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    });

    /*  setFormIsValid(
       event.target.value.includes('@') && passwordState.isValid
     ); */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({
      type: 'ADD_PASSWORD',
      val: event.target.value
    });

    /* setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    ); */
  };

  // * Si no ingreso un campo o es incorrecto lo pintara de rojo

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR'
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_BLUR'
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // * Esta seccion permite que en caso de que se de clic al btn iniciar sesion, enfoque el input que este vacio
    // eslint-disable-next-line default-case
    switch (true) {
      case formIsValid:
        authctx.onLogin(emailState.value, passwordState.value);
        break;
      case !emailIsValid:
        emailInputRef.current.focus();
        break;
      case !passwordIsValid:
        passwordInputRef.current.focus();
        break;
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Inputs
          ref={emailInputRef}
          isValid={emailState.isValid}
          label="E-Mail" type="email" id="email"
          value={emailState.value} onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Inputs
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          label="Password" type="password" id="password"
          value={passwordState.value} onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
