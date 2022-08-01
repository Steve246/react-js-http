import React, { Component } from "react";

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
        <button onClick={this.incrementCount}> Hover {count} X </button>
      </div>
    );
  }
}

export default HoverCounter;
