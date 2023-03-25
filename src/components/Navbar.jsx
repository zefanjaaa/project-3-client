import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
function Navbar() {

  const {isLoggedIn,user,logOutUser} = useContext(AuthContext)
  return (
    <nav>
<div>
<Link to="/"><button> Home</button></Link>
<Link to="/auth/signup"><button> Create an account</button></Link>
      <Link to="/auth/login"><button>Login</button></Link>

      {isLoggedIn && ( 
        <>
          <button onClick={logOutUser}> Log Out</button>
          <p>{user && user.name}</p>
        </>
      )}
      </div>
  
      <div>
        <p>Products</p>
        <p>Art</p>
        <p>Homegoods</p>
  </div>

    

    
    </nav>
  )
}

export default Navbar