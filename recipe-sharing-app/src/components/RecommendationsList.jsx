import useRecipeStore from "./recipeStore";

function Recommendation(params) {
    const RecommendedList = useRecipeStore((state) => state.generateRecommendations);

    
};

export default Recommendation;