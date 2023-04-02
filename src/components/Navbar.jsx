import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from '../context/auth.context'
// import { GoPerson } from ‘react-icons/go’
import { AiOutlineUser, AiOutlineLogout, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const { isLoggedIn, logOutUser,administrator } = useContext(AuthContext)
  const [nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  if (!isLoggedIn) {
    return <div>
      <Link to='/'><button>Home</button> </Link>
      <Link to='/auth/signup'><button> Create an account</button></Link>
      <Link to='/auth/login'><button>Login</button></Link>
      <div className='parent' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          {nav ? <h1>MENU</h1> : <p></p>}
          {nav ? <Link to='/'> Home</Link> : <p></p> }
        {nav ? <Link to='/product/products'> <p>Products</p></Link> : <p></p>}
     </div>
    </div>
  } else if (isLoggedIn & administrator) {
    return <div>
      <Link to='/'><button>Home</button> </Link>
      <AiOutlineLogout onClick={logOutUser} />
      <Link to='/wishlist'><AiOutlineUser /></Link>
      <Link to='/product/add'><button>add</button></Link>
      <div className='parent' onClick={handleNav}>
  {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
  {nav ? <h1>MENU</h1> : <p></p>}
  {nav ? <Link to='/'> Home</Link> : <p></p> }
  {nav ? <Link to='/product/products'> <p>Products</p></Link> : <p></p>}
</div>
    </div>
  } else if (isLoggedIn) {
    return<div>
    <Link to='/'><button>Home</button> </Link>
    <AiOutlineLogout onClick={logOutUser} />
    <Link to='/wishlist'><AiOutlineUser /></Link>
    <div className='parent' onClick={handleNav}>
  {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
  {nav ? <h1>MENU</h1> : <p></p>}
  {nav ? <Link to='/'> Home</Link> : <p></p> }
  {nav ? <Link to='/product/products'> <p>Products</p></Link> : <p></p>}
</div>
  </div>
  }
//   return (
//     <nav className=‘parent’>
// <div>
// <Link to=“/”><button> Home</button></Link>
//         {!isLoggedIn && (
//           <div>
//           <Link to=“/auth/signup”><button> Create an account</button></Link>
//             <Link to=“/auth/login”><button>Login</button></Link>
//           </div>
// )}
//       {isLoggedIn && (
//         <div>
//             <AiOutlineLogout onClick={logOutUser} />
//             <Link to=“/wishlist”><AiOutlineUser /></Link>
//         </div>
//         )}
//         {isLoggedIn & administrator && (
//           <div>
//             <Link to=“/product/add”><button>add</button></Link>
//             <AiOutlineLogout onClick={logOutUser} />
//        <Link to=“/wishlist”><AiOutlineUser /></Link>
//           </div>
//         )}
//       </div>
//       <div>
//        {/* <Link to=‘/product/products’><button><p>Products</p></button></Link>  */}
//       </div>
//       <div className=‘parent’ onClick={handleNav}>
//       {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//           {nav ? <h1>MENU</h1> : <p></p>}
//           {nav ? <Link to=“/”> Home</Link> : <p></p> }
//           {nav ? <Link to=‘/product/products’> <p>Products</p></Link> : <p></p>}
// </div>
//     </nav>
//   )
}
export default Navbar
        
        
