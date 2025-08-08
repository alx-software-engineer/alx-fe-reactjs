import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],

  filteredRecipes: [],

  favorites: [],
  
  recommendations: [],

  generateRecommendations: () => set(state => {
     // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return {recommendations : recommended };
  }),
  
  searchTerm: '',

  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () => set(state => ({filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))})),

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe : (id) => set((state) => ({recipes : state.recipes.filter(recipe => recipe.id !== id)})),

  updateRecipe : (id, title, description) => set((state) => ({ recipes : state.recipes.map(recipe => (
    recipe.id === id ? { ...recipe, title, description} : recipe
  ))}))

}));

export default useRecipeStore;