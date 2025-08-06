// AddRecipeForm component
  import { useState } from 'react';
  import  useRecipeStore  from './recipeStore';
  import { useNavigate } from 'react-router-dom';

  const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');

      navigate('/')

    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
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
       
        <button type="submit">Add Recipe</button>
      </form>
    );
  };

  export default AddRecipeForm;