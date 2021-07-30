import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Course from "./pages/Course/Course";
import Dashboard from "./pages/Dashboard.js/Dashboard";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/course/:id" component={Course} />
      </Switch>
    </Router>
  );
}

export default Routes;
