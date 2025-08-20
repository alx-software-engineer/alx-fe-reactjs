import { useState } from "react";
import useUserStore from "../Store/UserDetails";
import fetchUserData from "../services/githubService";


function Search() {
    const [userName, setUserName] = useState("");
    const [location, setLocation] = useState("");
    const [repo, setRepo] = useState("");
    
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
            const data = await fetchUserData(userName, location, repo); 
            setUser(data);

        } catch (error) {
            setError(true);
            setUser(null);
            
        } finally {
            setLoading(false);
        }
   
    } 
    
    return (
         <div className="w-full md:w-3/4 lg:w-1/2 m-auto text-black p-2">
            <h1 className="font-bold text-xl mb-3">LOOKUP GITHUB <span className="text-red-800">PROFILES</span> </h1>
            <form onSubmit={handleSubmit}>
                <div className=" bg-neutral-200 rounded-2xl p-2">
                    <input 
                    className="text-black w-full text-xs placeholder-black outline-none mb-3 p-2 border border-[#ca9503] rounded-2xl"
                    type="text"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Github UserName"
                    required
                    />

                    <input 
                    className="text-black w-full text-xs placeholder-black outline-none mb-3 p-2 border border-[#ca9503] rounded-2xl"
                    type="text"
                    name="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    />

                    <input 
                    className="text-black w-full text-xs placeholder-black outline-none mb-3 p-2 border border-[#ca9503] rounded-2xl"
                    type="number"
                    name="Repo"
                    value={repo}
                    onChange={(e) => setRepo(e.target.value)}
                    placeholder="Minimum repository"
                    />

                <button 
                className="text-xs bg-[#ca9503] px-8 py-1.5 rounded-2xl cursor-pointer border border-transparent hover:border-black" 
                type="submit"> {isLoading ? 'Searching...' : 'Search'} </button>
                </div>
            </form>

            <div className="mt-4">
                {isLoading && <p>Loading...</p>}
                {errorData && <p className="text-red-700">Looks like we cant find the user</p>}

                { user && !isLoading && !errorData && (

                    <nav>
                        <ul>
                            {user.map(currentUser => (
                                <li key={currentUser.id}>
                                    <img src={currentUser.avatar_url} className="w-[50px] h-[50px] rounded-full" />
                                    <p className="pt-2">{currentUser.html_url}</p>
                                    <p className="font-bold pt-2">{currentUser.login}</p>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    )
                }
               
            </div>
        </div>
       


    )
    
}

export default Search;