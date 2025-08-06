// RecipeList component
  import useRecipeStore  from './recipeStore';
  import { Link } from 'react-router-dom';
  import { useEffect } from 'react';
  

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    
    useEffect(() => {
      filterRecipes()
    }, [searchTerm])

   
    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipes/${recipe.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;