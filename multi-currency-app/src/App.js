import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import ManageWallet from "./pages/ManageWallet";

function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/register" exact component={() =><Register />} />
          <Route path="/dashboard" exact component={() => <DashBoard />} />
          <Route path="/manage" exact component={() => <ManageWallet />} />

        </Router>
      </Switch>
    </div>
  );
}
export default App;
