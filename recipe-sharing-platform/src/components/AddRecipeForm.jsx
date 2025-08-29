import { useState } from "react";


function AddRecipeForm() {
    const [title, setTitle] = useState(null);
    const [ingredients, setIngredients] = useState(null);
    const [steps, setSteps] = useState(null);




    return (
        <form>
            <h1>Hello World</h1>
        </form>
    )

}

export default AddRecipeForm;