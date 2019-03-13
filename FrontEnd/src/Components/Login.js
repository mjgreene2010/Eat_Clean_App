import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <p>SignUp/Login</p>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            className="username"
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div>
          <label htmlFor="username">Password: </label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div>
          <input type="submit" value="Enter" />
        </div>
      </div>
    );
  }
}
