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
                <div className=" bg-white rounded-2xl p-2 relative">
                    <input 
                    className="text-black w-full text-xs placeholder-black outline-none"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Search UserName"
                    />
                <button 
                className="text-xs absolute right-2 top-1.5 bg-[#ca9503] px-8 py-1.5 rounded-2xl cursor-pointer border-0 hover:border-1" 
                type="submit">Search</button>
                </div>
            </form>

            <div>
                Lorem ipsum dosgdhfcgjhvjbnklor, sit amet consectetur adipisicing elit. Eos, reiciendis.
            </div>
        </div>
       


    )
    
}

export default Search;