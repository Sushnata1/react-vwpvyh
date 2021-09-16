import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => this.increment()}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
}
export default Counter;
