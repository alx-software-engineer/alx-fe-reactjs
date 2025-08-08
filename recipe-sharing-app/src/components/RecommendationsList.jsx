import  useRecipeStore  from "../components/recipeStore";

function Recommendation() {
    const RecommendedList = useRecipeStore((state) => state.generateRecommendations);

    return (
        <div>
            <h2>My Favorites</h2>
            {RecommendedList.map(recipe => (
            <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </div>
      ))}
    </div>
    )
};

export default Recommendation;