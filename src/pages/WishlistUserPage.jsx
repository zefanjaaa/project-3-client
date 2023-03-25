import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import EditUser from '../components/EditUser'


function WishlistUserPage() {
  const { user } = useContext(AuthContext)
  
  return (
    <div>
    
    <h1>User enviroment </h1>
    <p><b>Welcome :</b> {user && user.name}</p>
    <EditUser user={user}/>
    </div>
  )
}

export default WishlistUserPage