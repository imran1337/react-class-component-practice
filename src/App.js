import React, { Component } from "react";
import User from "./User";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      userData: [],
      selectedUser: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.removeAddToCart = this.removeAddToCart.bind(this);
  }

  handleAddToCart(user) {
    const selectedU = [...this.state.selectedUser, user];
    const unique = selectedU.filter((v, i, a) => a.indexOf(v) === i);
    console.log({ unique });
    this.setState({
      selectedUser: selectedU,
    });
    console.log(selectedU);
  }

  removeAddToCart(user) {
    this.setState({
      selectedUser: this.state.selectedUser.filter((usr) => usr !== user),
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ userData: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  componentWillMount() {
    this.setState({
      userData: [],
    });
    console.log("hello", this.state.userData);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.data.toLocaleTimeString()}
        <div>user:{this.state.userData.length}</div>
        <div>cart:{this.state.selectedUser.length}</div>
        <div>
          {this.state.userData.map((usr) => (
            <User
              user={usr}
              handleAddToCart={this.handleAddToCart}
              removeAddToCart={this.removeAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}
