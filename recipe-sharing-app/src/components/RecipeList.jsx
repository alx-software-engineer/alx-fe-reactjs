// RecipeList component
  import useRecipeStore  from './recipeStore';
  import { Link } from 'react-router-dom';
  // import DeleteRecipe from './DeleteRecipeButton';
  // import EditRecipeForm from './EditRecipeForm';
  import { useState } from 'react';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    // const [popDialog, setIsOpen] = useState(false);
    // const [myID, setID] = useState(0);
    
    // function closeDialog() {
    //   setIsOpen(false);
    // }

    // function setMyId(id, status) {
    //   setID(id);
    //   setIsOpen(status);
    // }

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipes/${recipe.id}`}>
              View Details
            </Link>
            {/* <DeleteRecipe id={recipe.id}/> */}
            {/* <button onClick={() => setMyId(recipe.id, true)}>Edit</button> */}
          </div>
        ))}
        {/* {popDialog && <EditRecipeForm  isOpen={popDialog}  onClose={closeDialog} id={myID} />} */}
      </div>
    );
  };

  export default RecipeList;