import { useState } from "react";
import useUserStore from "../Store/UserDetails";
import fetchUserData from "../services/githubService";

function Search() {
    const [userName, setUserName] = useState("");
    
    // Get state from zustand store
    const user = useUserStore(state =>  state.user);
    const errorData = useUserStore(state =>  state.errorData);
    const isLoading = useUserStore(state =>  state.isLoading);
    const setUser = useUserStore(state =>  state.setUser);
    const setLoading = useUserStore(state =>  state.setLoading);
    const setError = useUserStore(state =>  state.setError);
   
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userName.trim()) return;

        try {
            setLoading(true);
            setError(null);

            // fetch data.
            const data = await fetchUserData(userName); 
            setUser(data);

        } catch (error) {
            setError(true);
            setUser(null);
            
        } finally {
            setLoading(false);
        }
   
    } 
    
    return (
         <div className="w-1/2 m-auto text-black p-2">
            <form onSubmit={handleSubmit}>
                <div className=" bg-neutral-200 rounded-2xl p-2 relative">
                    <input 
                    className="text-black w-full text-xs placeholder-black outline-none"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Search UserName"
                    required
                    />
                <button 
                className="text-xs absolute right-2 top-1.5 bg-[#ca9503] px-8 py-1.5 rounded-2xl cursor-pointer border-0 hover:border-1" 
                type="submit"> {isLoading ? 'Searching...' : 'Search'} </button>
                </div>
            </form>

            <div className="mt-4">
                {isLoading && <p>Loading...</p>}
                {errorData && <p className="text-red-700">Looks like we cant find the user</p>}

                { user && !isLoading && !errorData && (

                    <div>
                        <img src={user.avatar_url} className="w-[100px] h-[100px] rounded-full" />
                        <h2 className="font-bold">{user.name}</h2>
                        <p>{user.bio}</p>
                        <p>{user.login}</p>
                    </div>
                    )
                }
               
            </div>
        </div>
       


    )
    
}

export default Search;