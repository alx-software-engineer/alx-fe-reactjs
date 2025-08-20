import axios from "axios";

// Create URL and Headers
    const api = axios.create({
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
    });


const fetchUserData = async (user, location, minRepos) => {

    const queryParts = [];
    if (user) queryParts.push(user);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>${minRepos}`);
    const query = queryParts.join('+');


    const finalUrl = `https://api.github.com/search/users?q=${query}&per_page=2&page=1`;
  
    // Get Fetch User
        const response = await api.get(finalUrl);
        return response.data.items;
};

export default fetchUserData;