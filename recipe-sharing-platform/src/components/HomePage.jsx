import { useState, useEffect } from "react";
import recipeData from "../data.json"
import { Link } from "react-router-dom";

function HomePage() {
    const [recipes] = useState(recipeData);

  // If successful, display the list of recipes.
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">Recipe List</h1>
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