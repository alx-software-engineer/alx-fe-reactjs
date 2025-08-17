import { useState } from "react";

function Search() {
    const [userName, setUserName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

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