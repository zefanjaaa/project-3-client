import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function SingleContact() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()
    
    const getContact = () => {
        const token = localStorage.getItem('authToken')
        axios.get(
            `${API_URL}/contact/contacts/${contactId}`,
            {headers:{Authorization:`Bearer${token}`}}
        )
            .then((res) => {
                const oneContact = res.data
                setContact(oneContact)
            })
        .catch((error) => {console.log('THERE IS AN ERROR GETTING AND SETTING CONTACT',error)})
    }

    useEffect(() => {
        getContact()
    },[])
  return (
      <div>
          <h1>Single Contact information component</h1>
          {contact && (
              <div>
                  <h3><b>Title:</b>{contact.title}</h3>
                  <p><b>Name:</b>{contact.name}</p>
                  <p><i>Email:</i>{contact.email}</p>
                  <br />
                  <br />
                  <p><b>Text:</b>{contact.text}</p>

                  <p></p>
              </div>
          )}
    </div>
  )
}

export default SingleContact