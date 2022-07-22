import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import CurrencyExchange from "./pages/CurrencyExchange";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
          {/* <CurrencyExchange/> */}
          <Route path="/" exact component={() => <Login />} />
          <Route path="/register" exact component={() =><Register />} />
          <Route path="/dashboard" exact component={() => <DashBoard />} />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
