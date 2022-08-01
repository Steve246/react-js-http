import React, { Component } from "react";
import UpdateComponent from "./WithCounter";
class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseOver={this.incrementCount}>
          {" "}
          {this.props.name} Hover {count} X{" "}
        </button>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);
