import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dish from "./Components/Dish";
import DishIndex from "./Components/DishIndex";
import Nav from "./Components/Nav";
import SignUp from "./Components/SignUp";

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/index" component={DishIndex} />
      <Route exact path="/dish/:id" component={Dish} />
    </React.Fragment>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
