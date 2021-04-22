import React, { Component } from "react";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
  }

  componentWillMount() {
    this.setState({ userInfo: this.props.user });
  }

  render() {
    const { name, email, username } = this.state.userInfo;
    return (
      <div
        style={{ border: "1px solid green", padding: "20px", margin: "20px" }}
      >
        <h1>{name}</h1>
        <p>{username}</p>
        <h2>{email}</h2>
        <button onClick={() => this.props.handleAddToCart(this.props.user)}>
          Add to cart
        </button>
        <button onClick={() => this.props.removeAddToCart(this.props.user)}>
          remove
        </button>
      </div>
    );
  }
}

export default User;
