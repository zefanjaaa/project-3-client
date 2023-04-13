import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/auth.context';

const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function EditUser(props) {

    const {logOutUser} = useContext(AuthContext)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
   
    useEffect(() => {
     
        const findToken = localStorage.getItem('authToken')
        
        axios.get(`${API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${findToken}` } }
        )

            .then((response) => {
                const oneUser = response.data;
            
                setName(oneUser.name);
                setSurname(response.data.surname)
                
            })
        .catch((error) => console.log("THERE IS AN ERROR", error))
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const body = { name, surname }
        
        const storeToken = localStorage.getItem('authToken');
        
        axios.put(
            `${API_URL}/auth/${props.user._id}`,body, {headers: {Authorization:`Bearer ${storeToken}`}}
        )
            .then((response) => {
         alert('Your user information is updated!')
            setName("")
            setSurname('')
            })
            
        .catch((error) => console.log("THERE IS AN ERROR HANDELING EDIT SUBMIT",error))
    }

   
    const deleteUser = () => {
        const storeToken = localStorage.getItem('authToken')

        axios
        .delete(`${API_URL}/auth/${props.user._id}`, { headers: { Authorization: `Bearer ${storeToken}` } })
            .then(() => {
            
        logOutUser()
        
    })
        .catch((error) => {console.log('THERE IS AN ERROR DELETING THE USER',error)})
    }

  return (
      <div>
          <h3>EDIT USER INFORMATION</h3>
          <form onSubmit={handleSubmit}>
              
              <label> Name:</label>
             <input type="text" name='name' value={name} onChange={(event) =>setName(event.target.value)}/> 
              
              <label> Surname:</label>
              <input type='text' name='surname' value={surname} onChange={(event) => setSurname(event.target.value)}/>

           <button type='submit' class=' btn btn-dark'> Update user </button>

          </form>
          
           <button type='submit' class=' btn btn-danger' onClick={deleteUser}> Delete user </button>
           
         
      
      </div>
  )
}

export default EditUser