import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";


function DeleteRecipe({id}) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

     const rmvBtn = {
      backgroundColor : "red",
      color: "white",
      border : "0px",
      marginRight : "10px"
    }

    function handleDelete(id) {
      deleteRecipe(id)

      navigate('/')

    }

    return  <button onClick={() => handleDelete(id)} style={rmvBtn}>Delete</button>
};

export default DeleteRecipe;