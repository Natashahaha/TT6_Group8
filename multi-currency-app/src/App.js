import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
