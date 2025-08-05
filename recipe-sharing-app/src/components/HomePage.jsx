import AddRecipeForm from '../components/AddRecipeForm'
import RecipeList from '../components/RecipeList';

function HomePage() {
    return (
        <>
            <AddRecipeForm />
            <hr style={{ margin: '2rem 0' }} />
            <RecipeList />
        </>
    )
}

export default HomePage;