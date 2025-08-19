import axios from "axios";


const fetchUserData = async (user, location, repoNumber) => {

    let query = "";

    if (user) query += `${user}`;
    if (location) query += `+location:${location}`;
    if (repoNumber) query += `+repos:>${repoNumber}`;

    // Create URL and Headers
    const api = axios.create({
        baseURL: 'https://api.github.com/search/',
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
    });

    // Get Fetch User
        const response = await api.get(`users?q=${query}&per_page=2&page3`);
        return response.data.items;
};

export default fetchUserData;