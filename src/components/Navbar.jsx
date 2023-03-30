import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { GoPerson } from 'react-icons/go'
import { AiOutlineUser, AiOutlineLogout, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './test.css'

function Navbar() {

  const { isLoggedIn, logOutUser } = useContext(AuthContext)

  const [nav,setNav] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)


  }
  return (
    <nav className='parent'>
<div>
<Link to="/"><button> Home</button></Link>

        {!isLoggedIn && (
          <div>
          <Link to="/auth/signup"><button> Create an account</button></Link>
            <Link to="/auth/login"><button>Login</button></Link>
           
          </div>
)}
      {isLoggedIn && ( 
        <div>
           
            <AiOutlineLogout onClick={logOutUser} />
       
            <Link to="/wishlist"><AiOutlineUser /></Link>
            <Link to="/product/add"><button>add</button></Link>
        </div>
      )}
      </div>
  
      <div>
       {/* <Link to='/product/products'><button><p>Products</p></button></Link>  */}
       
      </div>
      <div className='parent' onClick={handleNav}>
      
          
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}   
          {nav ? <h1>MENU</h1> : <p></p>}
          {nav ? <Link to="/"> Home</Link> : <p></p> }
          {nav ? <Link to='/product/products'> <p>Products</p></Link> : <p></p>}
        
      
        
        
</div>
    
    </nav>
  )
}

export default Navbar