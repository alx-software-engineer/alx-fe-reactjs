// RecipeList component
  import useRecipeStore  from './recipeStore';
  import { Link } from 'react-router-dom';
  import { useEffect } from 'react';
  

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    
    useEffect(() => {
      filterRecipes()
    }, [searchTerm])

   
    return (
      <div>
        {filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"start"}}>
                <button onClick={() => addFavorite(recipe.id)}>Add To Favourite</button>
                <button onClick={() => removeFavorite(recipe.id)} style={{backgroundColor:"red", border:"0"}}>Remove in Favourite</button>
                <Link to={`/recipes/${recipe.id}`}>
                  View Details
                </Link>
            </div>
           
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;