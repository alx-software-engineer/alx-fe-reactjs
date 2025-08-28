import { useState, useEffect } from "react";

function HomePage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Interface.
    interface Recipe {
    id: number;
    title: string;
    summary: string;
    image: string;
    }

    useEffect(() => {
        const fetchLocalRecipes = async () => {
            try {
                const response = await fetch("/data.json")

                if (!response.ok) {
                throw new Error('Failed to fetch recipes');
                }

                const data = await response.json();
                setRecipes(data);

            } catch (err) {
                 setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLocalRecipes();

    }, []);


    if (isLoading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  // If successful, display the list of recipes.
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage