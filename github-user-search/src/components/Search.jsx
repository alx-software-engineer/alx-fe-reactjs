import { useState } from "react";
import useUserStore from "../Store/UserDetails";
import fetchUserData from "../services/githubService";

function Search() {
    const [userName, setUserName] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const userData = useUserStore(state => state.user);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await fetchUserData(userName); 
    } 
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Search UserName"
                />
            </div>
            <button type="submit">Search</button>
        </form>
    )
    
}

export default Search;