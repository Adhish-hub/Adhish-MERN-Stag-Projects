import { useParams, Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

const MealDetails = () => {
  const { id } = useParams();
  const { state } = useMenu();

  const meal = state.meals.find((item) => item.idMeal === id);

  if (!meal) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center">
        <h2 className="mb-4 text-3xl font-bold">Meal not found</h2>

        <Link to="/menu" className="text-orange-500">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 text-center">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="mx-auto h-80 w-80 rounded-xl object-cover"
      />

      <h1 className="mt-6 text-4xl font-bold text-orange-500">
        {meal.strMeal}
      </h1>

      <h3 className="mt-4 text-xl">Category: {meal.strCategory}</h3>
      <h3 className="mt-2 text-xl">Area: {meal.strArea}</h3>

      <p className="mt-6 text-left leading-7 text-zinc-300">
        {meal.strInstructions.slice(0, 500)}...
      </p>

      <Link to="/menu">
        <button className="mt-6 rounded-lg bg-orange-500 px-6 py-3 font-bold text-black hover:bg-orange-400">
          Back
        </button>
      </Link>
    </div>
  );
};

export default MealDetails;
