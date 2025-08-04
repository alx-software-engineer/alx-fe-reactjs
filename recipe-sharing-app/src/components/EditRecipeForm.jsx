import useRecipeStore from "./recipeStore";

function EditRecipeForm() {
    const editRecipe = useRecipeStore(state => state.updateRecipe);
    
     const editBtn = {
      backgroundColor : "green",
      color: "white",
      border : "0px",
    }

    return <button onClick={() => editRecipe(props.id)} style={editBtn}>Edit Recipe</button>
}