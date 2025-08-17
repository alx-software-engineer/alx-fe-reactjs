import { useState } from "react";

function Search() {
    const [userName, setUserName] = useState("");

    return (
        <form>
            <div>
                <input 
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Search UserName"
                />
            </div>
        </form>
    )
    
}

export default Search;