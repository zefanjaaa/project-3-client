import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate } from 'react-router-dom'

function IsPrivate({ children }) {
    const { isLoggedIn, isLoading } = useContext(AuthContext)
    
    if (isLoading) return <p> LOAAADING</p>

    if (!isLoggedIn) {
        return <Navigate to='/auth/login' />
    } else {
        return children
    }

}

export default IsPrivate