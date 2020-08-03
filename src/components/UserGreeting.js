import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // NOTE CONDITIONAL RENDERING
    // NOTE Approach # 1
    return this.state.isLoggedIn && <div>Welcome Vishwaz</div>;

    // NOTE Approach # 2
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwaz</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // NOTE Approach # 3
    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = <div>Welcome Vishwaz</div>;
    // } else {
    //   msg = <div>Welcome Guest</div>;
    // }

    // NOTE Approach # 4
    // return msg;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwaz</div>;
    // } else
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   );
  }
}

export default UserGreeting;
