import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    bio: "",
    avatar: ""
  };

  handleLogin = () => {
    fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
        // Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(console.log)
      .then(() => this.props.isLoggedIn());
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <div>Login</div>
        </div>
        <br />
        <div>
          <label>Username:</label>
          <input
            className="username"
            type="text"
            value={this.state.username}
            placeholder="Enter Username"
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            onClick={() => this.handleLogin()}
          />
          <button>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
