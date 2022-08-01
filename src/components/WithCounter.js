import React, { Component } from "react";

const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent name="this is HOC" />;
    }
  }
  return NewComponent;
};

export default UpdateComponent;
