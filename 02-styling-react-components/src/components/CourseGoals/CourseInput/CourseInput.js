import React, { useState } from 'react';
//import styled from 'styled-components';
import Button from '../../UI/Button/Button';
//import './CourseInput.css';
import styles from './CourseInput.module.css';

/* const ErrorMessage = styled.p`
  color: #db0000;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? '#db0000' : '#ccc')};
  background-color: ${props => (props.invalid ? '#fa8072' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`; */

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true); // * verificamos que se haya agregado un valor

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // * en caso de no agregarse un valor, no permitimos agregarlo a la lista
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* De esta forma podriamos agregar una clase extra 
      <FormControl className={!isValid && 'invalid'}> */}
      {/* Agregamos un props para pasarlo al styled-components 
      <FormControl invalid={!isValid}> */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>

        {/* De esta forma podriamos agregar estilo en linea en caso de que se cumpla alguna condicion
        <label style={{ color: !isValid ? '#db0000' : '#1a1b1c' }}>Objetivos del curso</label>
        <input style={{ backgroundColor: !isValid ? '#fa8072' : 'transparent', 
        borderColor: !isValid ? 'db0000' : '#ccc' }} type="text" onChange={goalInputChangeHandler} /> */}

        <label>Objetivos del curso</label>
        {!isValid ? <p className="small">Favor de ingresar un Objetivo</p> : ''}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Agregar objetivo</Button>
    </form>
  );
};

export default CourseInput;
