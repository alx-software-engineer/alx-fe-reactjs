 // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  import DeleteRecipe from './DeleteRecipeButton';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm />
        <DeleteRecipe />
      </div>
    );
  };

  export default RecipeDetails;