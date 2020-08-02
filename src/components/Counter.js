import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // NOTE If you need to have accurate information after changing state pass callback function as a second parameter on the setState method

    this.setState({ count: (this.state.count += 1) }, () => {
      console.log("count", this.state.count);
    });

    // NOTE Alternate approach, according to tutorial incrementFive shouldn't have worked.

    // this.setState((prevState, props) => ({count: prevState + props.addValue}))
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>count</button>
      </div>
    );
  }
}

export default Counter;
