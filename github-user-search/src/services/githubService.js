import axios from "axios";



function fetchUserData(user) {

    const addUser = useUserStore(state => state.addUser);

    // Create URL and Headers
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
    });

    // Get Fetch User
    try {
        const res = api.get(`users/${user}`);
        return (res.data);
    } catch (error) {
        return ("This UserName does not Exist");
    }
}

export default fetchUserData;