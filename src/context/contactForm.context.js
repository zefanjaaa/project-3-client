import React, {  useEffect,useState } from 'react'
import ContactFormCard from '../components/ContactFormCard'

const ContactContext = React.createContext()

function ContactProviderWrapper(props) {
    const [contact, setContact] = useState(false)
    
    const showForm = () => {
        if (!contact) {
            setContact(<ContactFormCard />)
        } else {
           setContact(<p></p>) 
        }
    }
    
    return (
        <ContactContext.Provider value={{contact,showForm}}>
{props.children}
        </ContactContext.Provider>
    )
}

export {ContactProviderWrapper,ContactContext}