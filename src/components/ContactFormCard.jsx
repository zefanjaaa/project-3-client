import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/ContactForm.css";


const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function ContactFormCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState(undefined);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleText = (event) => setText(event.target.value);
  const handleTitle = (event) => setTitle(event.target.value);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = { name, email, text, title };

    axios
      .post(`${API_URL}/contact/contact`, body)
      .then(() => {
        setName("");
        setEmail("");
        setText("");
        setTitle("");
      })
      .then(() => {
        alert(
          "Thank you for your feedback! We will get in touch with you as soon as possible!"
        );
        navigate("/wishlist");
      })
      .catch((err) => {
        const error = err.response.data.message;
        setError(error);
      });
  };
  return (
    <div class="form-area">
      <div class="container">
        <div class="row single-form g-0">
          <div class="col-sm-12 col-lg-6">
            <div class="left">
              <h2>CONTACT US</h2>
              <h3>
                We'll be in touch soon. <br></br>
                We aim to respond within 24 hours, but during busy periods like
                holidays, sales and special campaigns, we may take a little
                longer getting back to you.
              </h3>
              <br></br>
              <h4>Monday to Friday: We're available 24 hours a day</h4>
              <h4>Saturday and Sunday: We're available between 08:00-20:00</h4>
            </div>
          </div>
          <div class="col-sm-12 col-lg-6">
            <div class="right">
              <i class="fa fa-caret-left"></i>

              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    NAME
                  </label>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleName}
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleEmail}
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    TITLE
                  </label>
                  <input
                    type="title"
                    value={title}
                    name="title"
                    onChange={handleTitle}
                    class="form-control"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    MESSAGE
                  </label>
                  <textarea
                    value={text}
                    name="text"
                    onChange={handleText}
                    type="text"
                    class="form-control"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFormCard;
