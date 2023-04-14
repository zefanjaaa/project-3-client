import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import { NavLink } from "react-bootstrap";
import "../style/SingleContact.css"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function SingleContact() {
  const [contact, setContact] = useState(null);
  const { contactId } = useParams();
  const navigate = useNavigate();

  const getContact = () => {
    const token = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/contact/contacts/${contactId}`, {
        headers: { Authorization: `Bearer${token}` },
      })
      .then((res) => {
        const oneContact = res.data;
        setContact(oneContact);
      })
      .catch((error) => {
        console.log("THERE IS AN ERROR GETTING AND SETTING CONTACT", error);
      });
  };

  const removeContact = () => {
    const token = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/contact/contacts/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then(() => {
        alert("Contact removed");
        navigate("/wishlist");
      })
      .catch((error) => {
        console.log("there is an error deleting a contact!", error);
      });
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <div className="AllContactSingleReply">
      <section className="py-5">
        {contact && (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="wishlist-header border p-2">
                  <div className="row">
                    <h2> REQUEST DETAILS </h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="col-md-2">
                      <h4>
                        <b>TITLE</b>
                        <br></br>
                      </h4>
                      <p>{contact.title}</p>
                    </div>

                    <div className="col-md-2">
                      <h4>
                        <b>NAME</b>
                        <br></br>
                      </h4>
                      <p>{contact.name}</p>
                    </div>

                    <div className="col-md-2">
                      <h4>
                        <b>EMAIL</b>
                        <br></br>
                      </h4>
                      <p>{contact.email}</p>
                    </div>

                    <div className="col-md-4">
                      <h4>
                        <b>TEXT</b>
                        <br></br>
                      </h4>
                      <p>{contact.text}</p>
                    </div>

                    <div className="col-md-2">
                      <button
                        class="btn btn-outline-dark btn-sm"
                        type="button"
                        onClick={removeContact}
                      >
                        FINISHED
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default SingleContact;
