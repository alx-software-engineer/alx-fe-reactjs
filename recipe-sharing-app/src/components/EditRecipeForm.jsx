import {useEffect, useRef, useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm({isOpen, onClose, id}) {
   
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const dialogRef = useRef(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
            if (isOpen) dialogRef.current.showModal()
    }, [isOpen]);
    
    function closeDialog(event) {
        event.preventDefault();
        updateRecipe(id, title, description)
        onClose();
    };

    return (
        <dialog ref={dialogRef}>
            <form onSubmit={closeDialog}>
                <div>
                    <h2>Edit Details</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                    />
                </div>
                
                <div>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        required
                    />
                </div>

                <button type="submit" >Save</button>
            </form>
        </dialog>
    )
}

export default EditRecipeForm;