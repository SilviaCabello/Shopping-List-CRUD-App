import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Table2 from "./components/Table2";

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
        <img className="icecream" src="https://i.imgur.com/SGmsIYU.png" alt="icecreamIllustration"/>
        <h3 className="intro-title">What’s <mark className="highlight">not</mark> <br/> on your fridge?</h3>
        <div className="input-container">
          <input
            className="input-name"
            type="text"
            placeholder="Insert item"
            name="name"
            value={this.state.itemInfo.name}
            onChange={this.handleChange}
          />
          <input
            className="input-quantity"
            type="text"
            placeholder="Quantity"
            name="quantity"
            value={this.state.itemInfo.quantity}
            onChange={this.handleChange}
          />
          <button className="add-button" onClick={this.handleClick}>Add</button>
        </div>
        
        {/* <Table data={this.state.item}/> */}
        <Table2 data={this.state.item}/>

      </div>
    );
  }
}

export default App;
