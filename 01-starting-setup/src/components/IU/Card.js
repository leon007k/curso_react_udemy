import './Card.css';

function Card(props) {
  // * de esta forma logramos agregar mas clases a nuestro componente
  const classes = 'card ' + props.className;

  // * para agregar contenido dentro de nuestro componente, creamos un props.children dentro de las etiquetas del html
  return <div className={classes}>{props.children}</div>;
}

export default Card;