import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth.context'

const API = "http://localhost:5005";

function LoginPage() {

const [err, setErr] = useState(undefined) 

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()

const {storeToken, authenticateUser} = useContext(AuthContext)

const handleEmail = (event) => setEmail(event.target.value)
const handlePassword = (event) => setPassword(event.target.value)


function handleSubmit(e){
   e.preventDefault()
   const body = {email, password}
   axios.post(`${API}/auth/login`, body)
       .then((response) => {
           storeToken(response.data.authToken)
           authenticateUser()
   navigate('/wishlist')
  
      
   })
   .catch((error)=>{
   const description = error.response.data.message
   setErr(description)
      
     })
   }
   
  return (
    
    <div className="LoginForm">
    <h3>Login</h3>
 
 <form action="" onSubmit={handleSubmit}>

 <label htmlFor="">
 email
 <input type="email" value={email} onChange={handleEmail}/>
 </label>
 
 <label htmlFor="" >
 Password
 <input type="password" value={password} onChange={handlePassword}/>
 </label>
 
 <button type='submit'>Submit</button>
 
 </form>
    
 {err && <p>{err}</p>}

 <Link to={"/auth/signup"}>Create an account</Link>
 
 </div>
  )
}

export default LoginPage