import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div key={contact._id}>
        <h3>CONTACT FORM RESULT</h3>
        {contact.map((contact) => (
          <div key={contact._id}>
            <Link to={`/contact/${contact._id}`}>
              <p>
                <b>TITLE:</b>
                <span> {contact.title}</span>
              </p>
            </Link>
            <p>
              <b>NAME:</b>
              <span>{contact.name}</span>{" "}
            </p>
            <button
              className="btn btn-dark btn-sm wishlist-remove-btn"
              onClick={removeContact}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactFormResult;
