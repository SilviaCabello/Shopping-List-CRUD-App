import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  fetchItem = () => {
    fetch("/items")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  componentDidMount() {
    this.fetchItem();
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="name" />
        <button>Add</button>
      </div>
    );
  }
}

export default App;
