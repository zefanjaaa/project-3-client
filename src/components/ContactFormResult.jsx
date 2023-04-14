import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../style/ContactResult.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const API = process.env.API2 || "http://localhost:3000"

function ContactFormResult({ contactId }) {
  const [contact, setContact] = useState([]);

  const getAllContacts = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/contact/contacts`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })

      .then((response) => {
        setContact(response.data);
      })
      .catch((error) =>
        console.log("THERE IS AN ERROR GETTING THE CONTACT", error)
      );
  };

  const removeContact = () => {
    const token = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/contact/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then(() => {
        alert("Contact removed");
        getAllContacts();
      })
      .catch((error) => {
        console.log("there is an error deleting a contact!", error);
      });
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
    <br></br>
    <br></br>
      <div key={contact._id}>
        {contact.map((contact) => (
          <div key={contact._id} className=" d-grid gridFix">
            <br></br>
            <NavLink
              className="NavLinkResultForm"
              to={`/contact/${contact._id}`}
            >
              <p>
                <b>TITLE:</b>
                <span> {contact.title}</span>
              </p>
            </NavLink>
            <p>
              <b>NAME:</b>
              <span>{contact.name}</span>{" "}
            </p>
            <button
              className="btn btn-light btn-sm linlButtonControl"
              onClick={removeContact}
            >
              REMOVE
            </button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactFormResult;
