import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate} from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth.context';



const API = "http://localhost:5005";

// const storeToken = localStorage.getItem('authToken');

function EditUser(props) {


    const {logOutUser} = useContext(AuthContext)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    // const [password, setPassword] = useState("")

    // const navigate = useNavigate();

//OLD CODE ===========
    
    
    // const { userId } = useParams()

//NEW CODE ========

    // const { user } = useContext(AuthContext)
    // const userId = user._id

    

    useEffect(() => {
     
        const findToken = localStorage.getItem('authToken')
        
        axios.get(`${API}/auth/verify`, { headers: { Authorization: `Bearer ${findToken}` } }
        )

            .then((response) => {
                const oneUser = response.data;
                console.log(response.data)
                setName(oneUser.name);
                setSurname(response.data.surname)
                // setPassword(oneUser.password)
            })
        .catch((error) => console.log("THERE IS AN ERROR", error))
    }, [])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const body = { name, surname }
        
        const storeToken = localStorage.getItem('authToken');
        
        axios.put(
            `${API}/auth/${props.user._id}`,body, {headers: {Authorization:`Bearer ${storeToken}`}}
        )
            .then((response) => {
            console.log('RESPONSE ==>',response)
            setName("")
            setSurname('')
            })
            
        .catch((error) => console.log("THERE IS AN ERROR HANDELING EDIT SUBMIT",error))
    }

   
    const deleteUser = () => {
        const storeToken = localStorage.getItem('authToken')

        axios
        .delete(`${API}/auth/${props.user._id}`, { headers: { Authorization: `Bearer ${storeToken}` } })
        .then(() => {
        
        // localStorage.removeItem('authToken')

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

           <button type='submit'> Update user </button>

           

          </form>
          
           <button type='submit' onClick={deleteUser}> Delete user </button>
           
         
      
      </div>
  )
}

export default EditUser