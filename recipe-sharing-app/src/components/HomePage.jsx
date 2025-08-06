import AddRecipeForm from '../components/AddRecipeForm'
import RecipeList from '../components/RecipeList';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Link to={`/addRecipeForm`}>Recipe Form</Link>
                <SearchBar />
            </div>
            <hr style={{ margin: '2rem 0' }} />
            <RecipeList />
        </>
    )
}

export default HomePage;