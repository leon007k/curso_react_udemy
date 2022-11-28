import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import style from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Los mejores peces y verduras',
    price: 321.50,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'Una especialidad alemana!',
    price: 350.50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'Americano, crudo, carnoso',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Saludable...y verde...',
    price: 150,
  },
];

export default function AvailableMeals() {

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} id={meal.id} foodName={meal.name}
      description={meal.description} price={meal.price} />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
}