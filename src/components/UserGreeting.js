//Conditional Rendering 4 method
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1st method if else statement

    // if (this.state.isLoggedIn) {
    //   return <div>welcome sachin</div>;
    // } else {
    //   return <div>welcome Guest</div>;
    // }

    //2nd method Element variable

    // let Message
    // if (this.state.isLoggedIn) {
    //     Message = <div>welcome sachin</div>
    // }
    // else{
    //     Message = <div>Welcome Guest</div>
    // }
    // return <div>{Message}</div>

    //3rd ternary operator

    // return this.state.isLoggedIn ? (
    //     <div>welcome sachin</div>
    // ) : (
    //     <div>Welcome Guest</div>
    // )

    //4th short circuit operator
    return this.state.isLoggedIn && <div>welcome sachin</div>
  }
}

export default UserGreeting;
