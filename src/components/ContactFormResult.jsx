import React, { useState, useEffect } from 'react'
import {Link,useParams }from 'react-router-dom'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";


const API = process.env.API2 || "http://localhost:3000"


function ContactFormResult({contactId}) {

    const [contact, setContact] = useState([])
    // const {contactId} = useParams()


    const getAllContacts = () => {
        const storedToken = localStorage.getItem("authToken")

        axios.get(`${API_URL}/contact/contacts`, {
            headers:{Authorization:`Bearer ${storedToken}`},
        })

            .then((response) => {
                setContact(response.data)
                
              
            })
        .catch((error) => console.log("THERE IS AN ERROR GETTING THE CONTACT",error))
    }
    console.log('contact', contact)


    const removeContact = () => {
        const token = localStorage.getItem('authToken')
        
        axios.delete(`${API_URL}/contact/contacts/${contactId}`, { headers: { Authorization: `Bearer ${token}` } })
       
            .then(() => {
                alert('Contact removed')
                getAllContacts()
            })
            .catch((error) => {
            console.log('there is an error deleting a contact!', error)
        })
    }

    useEffect(() => {
        getAllContacts()
    },[])

  return (
      <div>
          <div key={contact._id}>
              <h1>Contact form result</h1>
              {contact.map((contact) => (
                  <div key={contact._id}>
                      <Link to={`${API}/contact/${contact._id}`}>
                          <p><b>Title:</b> {contact.title}</p>
                          </Link>
                      <p><b>Name:</b>{contact.name} </p>
                      <button onClick={() => { removeContact(contactId)}}>remove the contact</button>
                      </div>
              ))}
              </div>
    </div>
  )
}

export default ContactFormResult