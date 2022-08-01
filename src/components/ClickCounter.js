import { Component } from "react";
import UpdateComponent from "../shared/WithCounter";

class ClickCounter extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button onClick={IncrementCount}>Click {count} X </button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter);
