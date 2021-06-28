import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Components/pages/Signup";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/users">Users</Link>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
