import React, { useContext } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import "../style/Login.css";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

const API_URL = process.env.REACT_APP_API_URL||"http://localhost:5005";

function LoginPage() {
  const [err, setErr] = useState(undefined);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    axios
      .post(`${API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/wishlist");
      })
      .catch((error) => {
        console.log(error);
        const description = error.response.data.message;
        setErr(description);
      });
  }

  return (
    <div className="all">
      <div className="login">
        <h2>Login</h2>
        <h3>Welcome Back</h3>

        <form className="login-form" maction="" onSubmit={handleSubmit}>
          <div className="textbox">
            <input type="email" value={email} onChange={handleEmail} />
            <span htmlFor="">
              <MdIcons.MdOutlineAlternateEmail></MdIcons.MdOutlineAlternateEmail>
            </span>
          </div>

          <div className="textbox">
            <input type="password" value={password} onChange={handlePassword} />
            <span htmlFor="">
              <RiIcons.RiLockPasswordLine></RiIcons.RiLockPasswordLine>
            </span>
          </div>
          <button type="submit">LOGIN</button>

          {err && <p>{err}</p>}

          <NavLink className="NavLinK" to={"/auth/signup"}>
            Don't have an account? Sign in
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
