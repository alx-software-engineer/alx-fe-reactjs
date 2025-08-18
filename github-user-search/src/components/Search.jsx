import { useState } from "react";
import useUserStore from "../Store/UserDetails";
import fetchUserData from "../services/githubService";

function Search() {
    const [userName, setUserName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const userData = useUserStore(state => state.user);
    const setUser = useUserStore(state => state.setUser);

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await fetchUserData(userName); 

        // Save user data to Store.
        setUser({data})
        setIsLoading(!isLoading);
    } 
    
    return (
         <div className="w-1/2 m-auto text-black bg-amber-500 p-2">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    className="text-black bg-white rounded-2xl w-full text-xs p-2 placeholder-black"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Search UserName"
                    />
                </div>
                <button 
                className=""
                type="submit">Search</button>
            </form>

            <div>
                Lorem ipsum dosgdhfcgjhvjbnklor, sit amet consectetur adipisicing elit. Eos, reiciendis.
            </div>
        </div>
       


    )
    
}

export default Search;