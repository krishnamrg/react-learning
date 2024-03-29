import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

// this is a class component and it maintains state.
class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "Black", id: 1 },
      { name: "Yoshi", age: 32, belt: "Red", id: 3 },
      { name: "Crystal", age: 33, belt: "Yellow", id: 2 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.round(Math.random() * 1000);
    let ninjaCopy = [...this.state.ninjas, ninja];
    this.setAppState(ninjaCopy);
  };

  deleteNinja = id => {
    let ninjaCopy = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setAppState(ninjaCopy);
  };

  setAppState = ninjaCopy => {
    this.setState({
      ninjas: ninjaCopy
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}>
            {" "}
            here are the Ninjas
          </Ninjas>
        </div>
        <div>
          <AddNinja addNinja={this.addNinja}></AddNinja>
        </div>
      </div>
    );
  }
}

export default App;
