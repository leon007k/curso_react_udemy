import './ChartBar.css';

function ChartBar(props) {

  // *¨determinamos el porcentaje que tendra la grafica
  let barFillHeight = '0%';
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  /* console.log('props.value = ' + props.value);
  console.log('barfillheight = ' + barFillHeight); */


  /*
  * Para agregar la propiedad de Stlye a una etiqueta, se crea mediante una estructura de objeto de JS.
  * Para agregar por ejemplo un codigo de css que requiera guion en medio, se hace de la siguiente manera:
  * 'background-color', se utilizan comillas simples. Tambien puedes hacerlo de esta manera backgroundColor.
  */
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;