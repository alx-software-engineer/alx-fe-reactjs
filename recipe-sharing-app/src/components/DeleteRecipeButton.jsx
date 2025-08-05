import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";


function DeleteRecipe(props) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    function handleDelete(props) {
     deleteRecipe(props.id)
     navigate('/') 
    }

     const rmvBtn = {
      backgroundColor : "red",
      color: "white",
      border : "0px",
      marginRight : "10px"
    }

    return  <button onClick={() => deleteRecipe(props.id)} style={rmvBtn}>Delete</button>
};

export default DeleteRecipe;