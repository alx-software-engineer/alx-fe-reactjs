import { useState, useEffect } from "react";
import useUserStore from "../Store/UserDetails";
import api from "../components/github";
import axios from "axios";



function fetchUserData({user}) {

    const addUser = useUserStore(state => state.addUser);
   
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

export default fetchUserData;