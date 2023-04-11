import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function ContactFormCard() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [title,setTitle] = useState('')
  const [error,setError] = useState(undefined)
  
  const handleName = (event) => setName(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleText = (event) => setText(event.target.value)
  const handleTitle = (event) => setTitle(event.target.value)


  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const body = { name, email, text,title }
    
    axios.post(`${API_URL}/contact/contact`, body)
      .then(() => {
        setName('')
        setEmail('')
        setText('')
        setTitle('')
      })
      .then(() => {
        alert('Thank you for your feedback! We will get in touch with you as soon as possible!')
      navigate('/wishlist')

      })
      .catch((err) => {
        const error = err.response.data.message
        setError(error)
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
        <b>Title</b>
          <input type="title" value={title} name="title" onChange={handleTitle} />
        </label>
        <label>
          <b>Text</b>
          <textarea rows={'4'} cols={'50'} value={text} name='text' onChange={handleText} type="text" />

        
        </label>
        <button type='submit'> Submit </button>
      </form>

    </div>
  )
}

export default ContactFormCard