import { create } from 'zustand';
import recipeData from '../data.json';

const useRecipeStore = create((set) => ({
  recipes: recipeData,

  // Add a new recipe
  addRecipe: (newRecipe) => {
    const recipeWithId = { ...newRecipe, id: Date.now() };
    
    set((state) => ({
      recipes: [...state.recipes, recipeWithId]
    }));
  },
}));

export default useRecipeStore;