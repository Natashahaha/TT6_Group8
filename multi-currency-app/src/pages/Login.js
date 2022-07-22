import "./Login.css";
import background from './marina.jpg';

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
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
        <form id="loginForm" method="POST" action="index.html">
          <div className="tabContent">
            <label htmlFor="email">
              <i className="fas fa-envelope" />
            </label>
            <input
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
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="tabSubmitBtn">
              <button type="submit">LOGIN</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
