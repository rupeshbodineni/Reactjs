import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);

    // state initialization
    this.state = {
      Msg: "Hello World"
    };
  }

  // method to update state
  updateHandler(value) {
    this.setState({ Msg: value });
  }

  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <h2>Value: {this.state.Msg}</h2>

        <button onClick={this.updateHandler.bind(this, "Good Morning")}>GM</button>
        <button onClick={this.updateHandler.bind(this, "Good Afternoon")}>GA</button>
        <button onClick={this.updateHandler.bind(this, "Good Evening")}>GE</button>
        <button onClick={this.updateHandler.bind(this, "Good Night")}>GN</button>
      </div>
    );
  }
}

export default Message;