import axios from "axios";


const fetchUserData = async (user) => {

    // Create URL and Headers
    const api = axios.create({
        baseURL: 'https://api.github.com/',
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
    });

    // Get Fetch User
        const response = await api.get(`users/${user}`);
        return response.data;
};

export default fetchUserData;