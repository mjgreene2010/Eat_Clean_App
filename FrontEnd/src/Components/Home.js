import React, { Component } from "react";
import DishIndex from "./DishIndex";

export default class Home extends Component {
  state = {
    dishes: [],
    onClick: false,
    dishName: "",
    dishDescription: ""
  };

  handleNameChange = e => {
    this.setState({ dishName: e.target.value });
  };

  handleDescriptionChange = e => {
    this.setState({ dishDescription: e.target.value });
  };

  allDishes = () => {
    fetch("http://localhost:5000/dishes")
      .then(res => res.json())
      .then(dishes =>
        this.setState({
          dishes
        })
      );
  };

  //Create
  handleSubmit = e => {
    e.preventDefault();
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
    })
      .then(res => this.allDishes())
      .then(() => this.setState({ onClick: false }));
  };

  // Read
  componentDidMount = () => {
    this.allDishes();
  };

  //Update => in dishIndex component

  //Delete
  deleteDish = (id, e) => {
    const dishes = Object.assign([], this.state.dishes);
    dishes.splice(id, 1);
    this.setState({ dishes });

    fetch(`http://localhost:5000/dishes/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .catch(err => err => {
        return err;
      })
      .then(res => this.allDishes());
  };

  getDishes = () => {};

  render() {
    let style = {
      color: "red",
      marginLeft: "5px",
      padding: "5px"
    };

    return (
      <div>
        <div>
          <center style={{ fontSize: "75px", color: "green " }}>
            Eat Clean
          </center>
        </div>

        <div>
          {this.state.dishes.map((dish, index) => {
            return (
              <DishIndex
                key={dish.id}
                dish={dish}
                deleteDish={this.deleteDish}
                allDishes={this.allDishes}
              />
            );
          })}
        </div>

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
                      className="description"
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
                className="create"
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
