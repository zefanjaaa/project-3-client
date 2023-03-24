import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

<Link to="/"><button> Home</button></Link>
<Link to="/auth/signup"><button> Create an account</button></Link>
    <Link to="/auth/login"><button>Login</button></Link>
  
  

    

    
    </div>
  )
}

export default Navbar