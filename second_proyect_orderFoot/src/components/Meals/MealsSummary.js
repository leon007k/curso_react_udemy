import style from './MealsSummary.module.css';

export default function MealsSummary() {

  return (
    <section className={style.summary}>
      <h2>Deliciosa comida... Ordena Ya!</h2>
      <p>
        Elija su comida favorita de nuestra amplia selección disponible y
        disfrute de un delicioso almuerzo o cena en casa.
        Todas nuestras comidas se cocinan con ingredientes de alta calidad, justo a tiempo y
        ¡Por supuesto por chefs experimentados!
      </p>
    </section>
  );
}