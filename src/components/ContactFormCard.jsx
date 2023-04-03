import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = "http://localhost:5005";



function ContactFormCard() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [error,setError] = useState(undefined)
  
  const handleName = (event) => setName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleText = (event) => setText(event.target.value)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const body = { name, email, text }
    
    axios.post(`${API}/contact/contact`, body)
      .then(() => {
        setName('')
        setEmail('')
        setText('')
      })
      .then(() => {
      navigate('/wishlist')

      })
      .catch((err) => {
        const message = err.response.data.message
        setError(message)
    })

  }
  return (
    <div className='contactForm'>
      <form onSubmit={handleSubmit}>
        <label>
         <b>Name</b>
          <input type="text" value={name} name="name" onChange={handleName} />
        </label>

        <label>
        <b>Email:</b>
          <input type="email" value={email} name="email" onChange={handleEmail} />
        </label>

        <label>
          <b>Text</b>
          <textarea rows={'4'} cols={'50'} value={text} name='text' onChange={handleText} type="text" />

          {/* <input type="text" value={text} name="text" onChange={handleText} /> */}
        </label>
        <button type='submit'> Submit </button>
      </form>

    </div>
  )
}

export default ContactFormCard