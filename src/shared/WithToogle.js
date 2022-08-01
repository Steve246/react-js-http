import React, { Component } from "react";

const WithToogle = (WrappedComponent) => {
  class WithToogles extends Component {
    state = {
      toogleStatus: false,
    };
    toogle = () => {
      this.setState({
        toogleStatus: !this.state.toogleStatus,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          toogle={this.toogle}
          toogleStatus={this.state.toogleStatus}
        />
      );
    }
  }
  return WithToogles;
};

export default WithToogle;
