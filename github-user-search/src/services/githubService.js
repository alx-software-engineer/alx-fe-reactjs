import { useState, useEffect } from "react";
import api from "../components/github";



function fetchUserData({user}) {

    const [data, setData] = useState("");
    const [error, setError] = useState("");
   
    // Get User
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`users/${user}`);
                setData(res.data.login);
            } catch (error) {
                setError("This UserName does not Exist");
            }
        }
    })


}

export default fetchUserData;