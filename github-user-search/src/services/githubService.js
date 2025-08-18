import { useEffect } from "react";
import useUserStore from "../Store/UserDetails";
import axios from "axios";



function FetchUserData({user}) {

    const addUser = useUserStore(state => state.addUser);

    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
    });
   
    // Get User
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`users/${user}`);
                addUser(res.data.login);
            } catch (error) {
                setError("This UserName does not Exist");
            }
        }

        fetchData();
    })


}

export default FetchUserData;