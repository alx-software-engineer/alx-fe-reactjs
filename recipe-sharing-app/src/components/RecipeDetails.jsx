 // RecipeDetails component
  import useRecipeStore  from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  import DeleteRecipe from './DeleteRecipeButton';
  import { useParams } from 'react-router-dom';


  const RecipeDetails = () => {
    const {myRecipeId} = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === +myRecipeId)
    );

    !recipe ? "Sorry, recipe not found" : recipe; 

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <DeleteRecipe id={recipe.id} />
        <EditRecipeForm />
      </div>
    );
  };

  export default RecipeDetails;