// RecipeList component
  import  useRecipeStore  from './recipeStore';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const rmvBtn = {
      backgroundColor : "red",
      color: "white",
      border : "0px"
    }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => deleteRecipe(recipe.id)} style={rmvBtn}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;