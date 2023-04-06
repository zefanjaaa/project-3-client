import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const API = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [administrator, setAdministrator] = useState(null)

    const navigate = useNavigate()

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {
        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            axios.get(
                `${API}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
                .then((response) => {
                    const user = response.data
                    const adminCheck = response.data.isAdmin
                    // console.log('THIS IS THE RESPONSE.DATA/USER', response.data.isAdmin)
                    console.log('SECOND CONSOLE.LOG', user)
                    console.log('ADMINCHECK',adminCheck)
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setUser(user)
                    setAdministrator(adminCheck)
                })
                .catch((error) => {
                    setIsLoggedIn(false)
                    setIsLoading(false)
                    setUser(null)
                });
        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
        }
    }
    const removeToken = () => {
        localStorage.removeItem("authToken")

    }

    const logOutUser = () => {
        removeToken();
        authenticateUser()
        navigate("/")
    }

    useEffect(() => {
        authenticateUser()
    }, [])
    
    return (
        <AuthContext.Provider value={{isLoggedIn, isLoading, user,administrator, storeToken, authenticateUser, logOutUser}}>
{props.children}
        </AuthContext.Provider>
    )
}

export {AuthProviderWrapper,AuthContext}