 // RecipeDetails component
  import { useParams } from 'react-router-dom';
  import { useState } from 'react';
  import useRecipeStore  from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  import DeleteRecipe from './DeleteRecipeButton';


  const RecipeDetails = () => {
    const {myRecipeId} = useParams();
    const [popDialog, setPopDialog] = useState(false);

     function closeDialog() {
      setPopDialog(false);
    }


    function openDialog() {
    setPopDialog(true);
     }
    
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === +myRecipeId)
    );

    !recipe ? "Sorry, recipe not found" : recipe; 

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <DeleteRecipe id={recipe.id} />
        <button onClick={() => openDialog()} style={{backgroundColor:"green", border:"0px"}}>Edit</button>
        {popDialog && <EditRecipeForm  isOpen={popDialog}  onClose={closeDialog} id={recipe.id} />} 
      </div>
    );
  };

  export default RecipeDetails;