import React, { Component } from "react";

class AddTodo extends Component {

  state = {
    todo: { id: null, content: null }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);

    this.setState({content:''})
  }

  handleOnChange = (e) => {
    this.setState({id:Math.round(Math.random()*100), content:e.target.value});
  }

  render() {
    return (
      <div className="addTodo">
        <form onSubmit={this.handleOnSubmit}>
            <input type="text" onChange={this.handleOnChange} value={this.state.content}></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
