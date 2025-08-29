import { useState } from "react";


function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
   



    return (
        <div>
            <form>
                <h1>Add Your new recipe</h1>

                    {/* Recipe Title */}
                    <div>
                         <label>Title</label>
                          <input 
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Recipe Title"
                            required
                            />
                    </div>
                   

                    <textarea name="ingredients" id=""></textarea>
                
            </form>
        </div>
    )

}

export default AddRecipeForm;
