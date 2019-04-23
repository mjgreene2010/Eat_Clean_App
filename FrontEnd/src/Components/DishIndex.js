import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
// import Dish from "./Dish";

// rails s -p 5000

export default withRouter(
  class DishIndex extends Component {
    state = { isEdit: false, description: "" };

    updateDescription = () => {
      let data = { description: this.state.description };
      fetch(`http://localhost:5000/dishes/${this.props.dish.id}`, {
        method: "PUT",

        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => this.props.allDishes())
        .then(() => this.setState({ isEdit: false }));
    };

    render() {
      return (
        <div>
          {/* <Dish key={dish.id} dish={this.props.dish} /> */}
          {this.state.isEdit ? (
            <div>
              <form>
                <label>
                  Description:
                  <input
                    defaultValue={this.props.dish.description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </label>
                <input
                  type="submit"
                  onClick={e => {
                    e.preventDefault();
                    this.updateDescription();
                  }}
                />
              </form>{" "}
            </div>
          ) : (
            <div>
              <h2>
                {/* Name: */}
                <Link
                  to={`/dish/${this.props.dish.id}`}
                  activeClassName="active"
                >
                  {this.props.dish.name}{" "}
                </Link>
                <button
                  style={{ position: "10px" }}
                  onClick={() => this.setState({ isEdit: true })}
                >
                  edit
                </button>{" "}
                <button
                  style={{ position: "10px" }}
                  onClick={() => this.props.deleteDish(this.props.dish.id)}
                >
                  x
                </button>
              </h2>
              <p>Description: {this.props.dish.description} </p>
            </div>
          )}
        </div>
      );
    }
  }
);
