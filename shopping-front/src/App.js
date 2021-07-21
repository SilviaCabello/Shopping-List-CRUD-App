import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      itemInfo: { name: "", quantity: "" },
      itemData: {},
    };
  }

  fetchItem = () => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => this.setState({ item: data }));
  };

  componentDidMount() {
    this.fetchItem();
  }

  handleChange = (e) => {
    this.setState({
      itemInfo: { ...this.state.itemInfo, [e.target.name]: e.target.value },
    });
  };

  handleClick = () => {
    this.setState({
      itemData: this.state.itemInfo,
      itemInfo: { name: "", quantity: "" },
    });
  };

  sendItems = () => {
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.itemData),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          item: [...this.state.item, data],
        })
      );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemData !== this.state.itemData) {
      this.sendItems();
    }
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.itemInfo.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="quantity"
          name="quantity"
          value={this.state.itemInfo.quantity}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default App;
