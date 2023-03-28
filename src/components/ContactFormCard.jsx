import React from 'react'

function ContactFormCard({email,name,text}) {
  return (
      <div>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b>{email}</p>
          <p><b>Text:</b>{text}</p>
    </div>
  )
}

export default ContactFormCard