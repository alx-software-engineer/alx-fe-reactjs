import useRecipeStore from "./recipeStore";

function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <div>
            <input
                type="text"
                placeholder="Search recipes..."
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <h2>Search Recipe</h2>
        </div>
    );
};

export default SearchBar;