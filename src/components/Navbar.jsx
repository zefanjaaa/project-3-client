import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
function Navbar() {

  const {isLoggedIn,user,logOutUser} = useContext(AuthContext)
  return (
    <nav>
<div>
<Link to="/"><button> Home</button></Link>

        {!isLoggedIn && (
          <>
          <Link to="/auth/signup"><button> Create an account</button></Link>
      <Link to="/auth/login"><button>Login</button></Link>
          </>
)}
      {isLoggedIn && ( 
        <>
          <button onClick={logOutUser}> Log Out</button>
            {/* <p> <b>Welcome:</b> {user && user.name}</p> */}
            <Link to="/wishlist"><button>User Page</button></Link>
        </>
      )}
      </div>
  
      <div>
       <Link to='/product/products'><button><p>Products</p></button></Link> 
       
  </div>

    

    
    </nav>
  )
}

export default Navbar