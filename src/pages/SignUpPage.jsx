import React,{ useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "../style/SignUp.css";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";


const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function SignUpPage() {
  const [err, setErr] = useState(undefined); // undefined bc we dont save anything

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmail = (event) => setEmail(event.target.value);
  const handleName = (event) => setName(event.target.value);
  const handleSurname = (event) => setSurname(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password, surname, name };
    axios
      .post(`${API_URL}/auth/signup`, body)
      .then(() => {
        alert('New user created')
        navigate("/auth/login");
      })
      .catch((error) => {
        const description = error.response.data.message;
        setErr(description);
      });
  }

  return (
    <div className="all">
      <div className="login2">
        <h2>Sign In</h2>
        <h3>Create an Account</h3>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <span htmlFor="">
              <MdIcons.MdOutlineAlternateEmail></MdIcons.MdOutlineAlternateEmail>
            </span>
          </div>

          <div className="textbox">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <span htmlFor="">
              <RiIcons.RiLockPasswordLine></RiIcons.RiLockPasswordLine>
            </span>
          </div>

          <div className="textbox">
          <span htmlFor="">name</span>
            <input
              type="text"
              value={name}
              name="password"
              onChange={handleName}
            />
            
          </div>

          <div className="textbox">
          <span htmlFor="">surname</span>
            <input
              type="text"
              value={surname}
              name="surname"
              onChange={handleSurname}
            />
            
          </div>

          <button type="submit">Sign In</button>

          {err && <p>{err}</p>}

          <NavLink className="NavLinK" to={"/auth/login"}>
            Already have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
