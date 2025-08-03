// RecipeList component
  import  useRecipeStore  from './recipeStore';
  import DeleteRecipe from './DeleteRecipeButton';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    const editBtn = {
      backgroundColor : "green",
      color: "white",
      border : "0px",
    }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <DeleteRecipe id={recipe.id}/>
            <button style={editBtn}>Edit Recipe</button>
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;