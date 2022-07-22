import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Login2 from "./pages/Login2";
import Register2 from "./pages/Register2";
import DashBoard from "./pages/DashBoard";
import ManageWallet from "./pages/ManageWallet";

function App() {
  return (
    <div className="App">
      <Switch>
        <Router>
          <Route path="/login2" exact component={() => <Login2 />} />
          <Route path="/register2" exact component={() =><Register2 />} />
          <Route path="/" exact component={() => <Login />} />
          <Route path="/register" exact component={() =><Register />} />
          <Route path="/dashboard" exact component={() => <DashBoard />} />
          <Route path="/manage" exact component={() => <ManageWallet />} />
          <Route path="/currencywallet" exact component={() => <CurrencyWallet />} /> 
        </Router>
      </Switch>
    </div>
  );
}
export default App;
