import React, { Component } from "react";

export default class Dish extends Component {
  state = {
    dish: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/dishes/${id}`).then(res =>
      res.json().then(dish => this.setState({ dish }))
    );
  }

  render() {
    return (
      <div>
        <p>{this.state.dish.name}</p>
      </div>
    );
  }
}
