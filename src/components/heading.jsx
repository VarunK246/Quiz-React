import React, { Component } from "react";

class Top extends Component {
  state = {
    winner: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Quiz Mania</h1>
        <button>Choose your series</button>
        <h1>Result:{this.result()}</h1>
      </React.Fragment>
    );
  }
  result() {
    return this.state.winner === 1
      ? "Congradulations"
      : "Better Luck Next time";
  }
}

export default Top;
