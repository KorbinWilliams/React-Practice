import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  // NOTE Passing methods as props: In the parent component define the method, on the child component tag pass the method as a prop, in the child component access the method using the props object, if passing a parameter use arrow function syntax.

  greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
