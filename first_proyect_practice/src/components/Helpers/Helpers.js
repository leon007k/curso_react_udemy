/*
  * Este archivo se crea para poder retornar codigo jsx sin necesidad de agregar un div parent al return de un componente
*/
export default function Helpers(props) {
  return (props.children);
}