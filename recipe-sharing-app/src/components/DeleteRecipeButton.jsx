import useRecipeStore from "./recipeStore";


function DeleteRecipe(props) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

     const rmvBtn = {
      backgroundColor : "red",
      color: "white",
      border : "0px",
      marginRight : "10px"
    }

    return  <button onClick={() => deleteRecipe(props.id)} style={rmvBtn}>Delete</button>
};

export default DeleteRecipe;