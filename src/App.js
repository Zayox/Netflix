import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <div className="bg-[#050505] overflow-x-hidden">
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
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

