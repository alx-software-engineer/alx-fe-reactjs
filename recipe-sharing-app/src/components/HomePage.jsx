import AddRecipeForm from '../components/AddRecipeForm'
import RecipeList from '../components/RecipeList';
import SearchBar from './SearchBar';

function HomePage() {
    return (
        <>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <AddRecipeForm />
                <SearchBar />
            </div>
            <hr style={{ margin: '2rem 0' }} />
            <RecipeList />
        </>
    )
}

export default HomePage;