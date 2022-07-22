import { Link } from "react-router-dom";
import "./Login.css";
import background from './marina.jpg';

const Register = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover'
    }}>

      <meta charSet="UTF-8" />
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
      <div className="register">
        <div className="links">
          <Link to="/register" className="active" href="#">
            Register
          </Link>
          <Link to="/" href="#">
            Login
          </Link>
        </div>
        <form id="regForm" method="POST" action="register.html">
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
              minLength={8}
            />
            <label htmlFor="username">
              <i className="fas fa-user" />
            </label>
            <input type="text" id="username" name="username" placeholder="username" required />
            <div className="tabSubmitBtn">
              <button type="submit">REGISTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
