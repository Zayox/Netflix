import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <div className="bg-[#050505] overflow-x-hidden">
        <Router>
            <Switch>
                <Route path="/login">
                    <h1 className="bg-white">Welcome to the login <Link to="/">screen</Link></h1>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

