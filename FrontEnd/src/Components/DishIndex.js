import React, { Component } from "react";

export default class DishIndex extends Component {
  state = {
    onClick: false,
    dishName: "sushi",
    dishDescription: "Free salmonella roll"
  };

  postDish = () => {
    fetch("http://localhost:5000/dishes/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.dishName,
        description: this.state.dishDescription
      })
    }).then(res => res.json().then(res => res.name, res.description));
  };

  handleNameChange = e => {
    this.setState({ dishName: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ dishDescription: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // if (this.state.dishinfo.name && this.state.dishinfo.description)
    fetch("http://localhost:5000/dishes/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.dishName,
        description: this.state.dishDescription
      })
    }).then(res => console.log(res));
    // (res => res.json().then(res => res.name, res.description));
    console.log(this.state);
  };

  render() {
    let style = {
      color: "red",
      marginLeft: "5px",
      padding: "5px"
    };
    console.log(this.state.dishName);
    console.log(this.state.dishDescription);
    return (
      <div>
        <div>
          {this.state.onClick ? (
            <div>
              <form className="dishForm" onSubmit={e => this.handleSubmit(e)}>
                <div>
                  <label>
                    Name:
                    <input
                      name="name"
                      type="text"
                      value={this.state.dishName}
                      required
                      onChange={e => this.handleNameChange(e)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Description:
                    <input
                      name="description"
                      type="text"
                      required
                      value={this.state.dishDescription}
                      onChange={e => this.handleDescriptionChange(e)}
                    />
                  </label>
                </div>
                <div>
                  <input type="submit" />
                </div>
              </form>
            </div>
          ) : (
            <div>
              <button
                onClick={() => this.setState({ onClick: !this.state.onClick })}
                style={style}
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
