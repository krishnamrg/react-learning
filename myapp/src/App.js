import React, {Component} from "react";
import Ninjas from "./Ninjas";

class App extends Component {

  state = {
    ninjas : [
      {name:'Ryu', age:30, belt:'Black', id:1},
      {name:'Yoshi', age:32, belt:'Red', id:3},
      {name:'Crystal', age:33, belt:'Yellow', id:2}
    ]
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas}> here are the Ninjas</Ninjas>
      </div>
    );
  }
}

export default App;
