import { Component } from "react";
import UpdateComponent from "../shared/WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={IncrementCount}> Hover {count} times </h2>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);
