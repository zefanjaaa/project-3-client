import React, { useContext,useState } from 'react'
import { AuthContext } from '../context/auth.context'
// import { ContactContext } from '../context/contactForm.context'
import EditUser from '../components/EditUser'

import ContactFormCard from '../components/ContactFormCard'

function WishlistUserPage() {
  const { user } = useContext(AuthContext)
  // const { showForm } = useContext(ContactContext)

  const [edit, setEdit] = useState(false)
  const [contact,setContact] = useState(false)
  // const [form,setForm] = useState(false)
  
  
  const handleEdit = () => {
    setEdit(!edit)
  }

  // const handleForm = () => {
  //   setForm(!form)
  // }

  const handleContact = () => {
    setContact(!contact)
  }
  
  return (
    <div>
   
    <h1>User enviroment </h1>
      <p><b>Welcome :</b> {user && user.name} {user && user.surname}</p>
      
      <button onClick={handleEdit}> Edit   </button>
      {edit ? <EditUser user={user} /> : <p></p>}

      <button onClick={handleContact}> Contact</button>
      {contact ? <ContactFormCard /> : <p></p> }

      {/* <button onClick={showForm}> contact</button> */}
     {/* {form? <ContactFormCard showForm={showForm} /> : <p></p> } */}
   
    </div>
  )
}

export default WishlistUserPage