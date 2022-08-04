import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

  // * obtenemos un array de todos los valores para obtener el maximo
  const dataValues = props.data.map(dataPoints => dataPoints.value);
  const totalMaximum = Math.max(...dataValues);

  return (
    <div className="chart">
      {
        props.data.map(dataPoints =>
          <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />)
      }
    </div>
  );

}

export default Chart;