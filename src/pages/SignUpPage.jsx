import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const API = "http://localhost:5005";

function SignUpPage() {

const [err, setErr] = useState(undefined) // undefined bc we dont save anything

const [email, setEmail] = useState('')
const [name, setName] = useState('')
const [surname, setSurname] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const handleEmail = (event)=> setEmail(event.target.value)
const handleName = (event)=> setName(event.target.value)
const handleSurname = (event)=> setSurname(event.target.value)
const handlePassword = (event)=> setPassword(event.target.value)

function handleSubmit(e){
   e.preventDefault()
   const body = {email, password, surname, name}
   axios.post(`${API}/auth/signup`, body)
   .then(()=>{
   navigate('/')
//    setEmail('')
//    setName('')
//    setSurname('')
//    setPassword('')
   })
   .catch((error)=>{
   const description = error.response.data.message
   setErr(description)
   
  })
}

 return (
   <div className="SignUpForm">
   <h3>Sign Up</h3>

<form action="" onSubmit={handleSubmit}>
<label htmlFor="">
email
<input type="email" name="email" value={email} onChange={handleEmail}/>
</label>

<label htmlFor="" >
Password
<input type="password" name='password' value={password} onChange={handlePassword}/>
</label>

<label htmlFor="">
Name
<input type="text" value={name} name='password' onChange={handleName}/>
</label>

<label htmlFor="">
Surname
<input type="text" value={surname} name='surname' onChange={handleSurname}/>
</label>

<button type='submit'>Submit</button>

</form>

{err && <p>{err}</p>}

<Link to={"/auth/login"}>Login</Link>

 </div>
  )
}

export default SignUpPage