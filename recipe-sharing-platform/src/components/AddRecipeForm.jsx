import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../Store/recipeStore";


function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');
    const [summary, setSummary] = useState('');
    const [errors, setErrors] = useState({});
   
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const navigate = useNavigate();


    const validateForm = () => {
        const newErrors = {};

        if (!title.trim()) newErrors.title = 'Title is required.';
        if (!summary.trim()) newErrors.summary = 'Summary is required.';
        if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
        if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';

        setErrors(newErrors);
        // If the newErrors object is empty, the form is valid
        return Object.keys(newErrors).length === 0;
    };



     const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {

                const newRecipe = {
                    title: title.trim(),
                    summary: summary.trim(),
                    image: image.trim() || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png?20250720084638',
                    ingredients: ingredients.split('\n').map(item => item.trim()).filter(item => item !== ''),
                    instructions: steps.split('\n').map(item => item.trim()).filter(item => item !== ''), 
                };

        addRecipe(newRecipe);

        // Navigate the user back to the home page
        alert('Recipe successfully added!');
        navigate('/');

        }  
    };
    

    return (
        // Main container for the form, centered and styled like a card
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-xl shadow-lg my-10">
            <form onSubmit={handleSubmit} noValidate> {/* noValidate prevents browser's default HTML validation tooltips */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add Your New Recipe</h1>

                {/* Recipe Title Input */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
                    <input 
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., Delicious Jollof Rice"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
                    />
                </div>

                {/* Recipe Summary Input */}
                <div className="mb-4">
                    <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">Short Summary</label>
                    <input 
                        type="text"
                        id="summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder="A brief, enticing description of the recipe..."
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
                    />
                </div>

                {/* Image URL Input */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Image URL (Optional)</label>
                    <input 
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Paste image link here (e.g., https://example.com/jollof.jpg)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200"
                    />
                </div>

                {/* Ingredients Textarea */}
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>
                    <textarea 
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="6"
                        placeholder="1 cup rice&#10;2 tomatoes&#10;Salt to taste"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200 resize-y"
                    />
                </div>
                
                {/* Preparation Steps Textarea */}
                <div className="mb-6">
                    <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>
                    <textarea 
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows="10"
                        placeholder="1. Wash the rice thoroughly.&#10;2. Blend tomatoes and peppers.&#10;3. Cook sauce, then add rice."
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200 resize-y"
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full py-3 px-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition duration-200"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    )

}

export default AddRecipeForm;
