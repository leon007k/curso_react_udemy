import React, { useRef, useImperativeHandle, forwardRef } from "react";
import classes from './Inputs.module.css';

function Inputs(props, ref) {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // * Permite personalizar el valor de instancia que se expone a los componentes padres Ref. De esta
  // * forma podriamos usar Ref fuera de este componente y los reciba como props para hacer una accion
  // ! Debe evitar usarse este timo de ReactHook
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    };
  });

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={inputRef} type={props.type} id={props.id} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
    </div>
  );

}

export default forwardRef(Inputs);