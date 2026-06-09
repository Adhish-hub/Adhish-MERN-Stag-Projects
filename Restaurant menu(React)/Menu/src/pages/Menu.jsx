import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useMenu } from "../context/MenuContext";

const Menu = () => {
  const [search, setSearch] = useState("chicken");
  const { state, dispatch } = useMenu();

  const inputRef = useRef(null);

  const fetchMeals = useCallback(async () => {
    try {
      dispatch({ type: "LOADING" });

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );

      const data = await response.json();

      if (data.meals) {
        dispatch({ type: "SUCCESS", payload: data.meals });
      } else {
        dispatch({ type: "SUCCESS", payload: [] });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: "Something went wrong" });
    }
  }, [search, dispatch]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const totalMeals = useMemo(() => {
    return state.meals.length;
  }, [state.meals]);

  return (
    <div className="px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-orange-500">
        Restaurant Menu
      </h1>

      <div className="mb-6 flex justify-center gap-3">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-orange-500"
        />

        <button
          onClick={fetchMeals}
          className="rounded-lg bg-orange-500 px-6 py-3 font-bold text-black hover:bg-orange-400"
        >
          Search
        </button>
      </div>

      <h3 className="mb-6 text-center text-xl">Total Items: {totalMeals}</h3>

      {state.loading && (
        <h2 className="text-center text-2xl text-orange-400">Loading...</h2>
      )}

      {state.error && (
        <h2 className="text-center text-2xl text-red-500">{state.error}</h2>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {state.meals.map((meal) => {
          return (
            <div
              key={meal.idMeal}
              className="rounded-xl bg-zinc-900 p-4 shadow-lg transition hover:scale-105"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="h-48 w-full rounded-lg object-cover"
              />

              <h2 className="mt-4 text-xl font-bold">{meal.strMeal}</h2>

              <p className="mt-2 text-zinc-400">{meal.strCategory}</p>

              <Link to={`/meal/${meal.idMeal}`}>
                <button className="mt-4 w-full rounded-lg bg-orange-500 py-2 font-bold text-black hover:bg-orange-400">
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
