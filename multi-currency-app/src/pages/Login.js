import "./Login.css";
import background from "./marina.jpg";
import AuthContext from "../context/AuthProvider";

import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    
    // <div style={{ backgroundImage: `url(${background})` }}>

    // trying to modify
    
      <div style={{ 
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover'
      }}>

      <meta charSet="UTF-8" />{" "}
      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="{{ url_for('static', filename='style.css') }}"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      />
      <div className="login">
        <div className="links">
          <Link to="/register" href="#">
            Register
          </Link>
          <Link to="/" className="active" href="#">
            Login
          </Link>
        </div>
        <p
    
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form id="loginForm" method="POST" action="index.html">
          <div className="tabContent">
            <label htmlFor="email">
              <i className="fas fa-envelope" />
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="password">
              <i className="fas fa-lock" />
            </label>
            <input
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="tabSubmitBtn">
              <button onClick={handleSubmit}>LOGIN</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
