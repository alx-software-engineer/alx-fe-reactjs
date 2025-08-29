import { useState, useEffect } from "react";
import useRecipeStore from "./Store/recipeStore";
import { Link } from "react-router-dom";

function HomePage() {
     const recipes = useRecipeStore(state => state.recipes);

  // Display the list of recipes.
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col gap-4 justify-between align-middle mb-10 w-full sm:flex-row sm:gap-0">
          <h1 className="text-4xl text-center sm:text-right text-emerald-600 font-bold">Recipe List</h1>
               <Link to={`/recipeForm`}>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition w-full sm:w-max"
                    >
                    Add Recipe
                  </button>
                </Link>
      </div>
      <ul className="list-none p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <li key={recipe.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300" />
            
          <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {recipe.summary}
                </p>
                <Link to={`/recipe/${recipe.id}`}>
                  <button
                    type="button"
                    className="w-full px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition"
                    >
                    View Recipe
                  </button>
                </Link>
              </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage