import { useParams } from "react-router-dom";
import useRecipeStore from "../Store/recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();

  const recipes = useRecipeStore(state => state.recipes);

  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div className="text-center text-red-500 mt-10">Recipe not found!</div>;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
        
        <Link to={"/"} className="font-extrabold mb-3 text-emerald-600">Go Back</Link>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
      />

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className="text-2xl font-bold text-emerald-600 mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export default RecipeDetail;
