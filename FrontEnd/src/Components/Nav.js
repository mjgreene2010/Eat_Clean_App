import React, { Component } from "react";
import "../App.css";

import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const link = {
      width: "50px",
      padding: "10px",
      margin: "0 6px 6px",
      background: "blue",
      textDecoration: "none",
      color: "white",
      borderRadius: "5px",
      display: "inline-block"
    };
    return (
      <div>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/index"
          exact
          style={link}
          activeStyle={{
            background: "black"
          }}
        >
          Dishes
        </NavLink>
      </div>
    );
  }
}
