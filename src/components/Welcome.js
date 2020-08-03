import React, { Component } from "react";

class Welcome extends Component {
  render() {
    // NOTE Destructuring in class components happens inside the render function
    // const {name, heroName} = this.props
    // NOTE Destructuring state
    // const {state1, state2} = this.state
    return (
      <h1>
        {/* Welcome {name} a.k.a {heroName} */}
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
