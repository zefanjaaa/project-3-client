import React, { useState, useEffect } from 'react'
import {Link }from 'react-router-dom'
import axios from 'axios'

const API = "http://localhost:5005";

const API_URL = "http://localhost:3000"


function ContactFormResult() {

    const [contact, setContact] = useState([])
    
    const getAllContacts = () => {
        const storedToken = localStorage.getItem("authToken")

        axios.get(`${API}/contact/contacts`, {
            headers:{Authorization:`Bearer ${storedToken}`},
        })

            .then((response) => {
                setContact(response.data)
                console.log('CONTACT', response.data)
            })
        .catch((error) => console.log("THERE IS AN ERROR GETTING THE CONTACT",error))
    }

    useEffect(() => {
        getAllContacts()
    },[])

  return (
      <div>
          <div key={contact._id}>
              <h1>Contact form result</h1>
              {contact.map((contact) => (
                  <div>
                      <Link to={`${API_URL}/contact/${contact._id}`}>
                          <p><b>Title:</b> {contact.title}</p>
                          </Link>
                      <p><b>Name:</b>{contact.name} </p>
                      </div>
              ))}
              </div>
    </div>
  )
}

export default ContactFormResult