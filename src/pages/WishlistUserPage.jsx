import React, { useContext,useState } from 'react'
import { AuthContext } from '../context/auth.context'
import EditUser from '../components/EditUser'


function WishlistUserPage() {
  const { user } = useContext(AuthContext)

  const [edit, setEdit] = useState(false)
  
  const handleEdit = () => {
    setEdit(!edit)
  }
  
  return (
    <div>
   
    <h1>User enviroment </h1>
      <p><b>Welcome :</b> {user && user.name}</p>
      <button onClick={handleEdit}> Edit   </button>
      {edit ? <EditUser user={user}/> : <p></p>}
    
    </div>
  )
}

export default WishlistUserPage