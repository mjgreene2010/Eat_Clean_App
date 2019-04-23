import React, { Component } from "react";
import "../App.css";

import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const link = {
      width: "100px",
      padding: "7px",
      margin: "0 6px 6px",
      background: "tan",
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
            background: "brown"
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "brown"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/dish"
          exact
          style={link}
          activeStyle={{
            background: "brown"
          }}
        >
          Dish
        </NavLink>
      </div>
    );
  }
}
