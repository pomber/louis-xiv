import { Component } from "react";
import ReactDOM from "react-dom";

class State extends Component {
  state = { ...this.props.init };

  render() {
    const state = this.props.map ? this.props.map(this.state) : this.state;
    return this.props.children(
      state,
      (s, se) => this.setState(s, se),
      (s, se) => ReactDOM.unstable_deferredUpdates(() => this.setState(s, se))
    );
  }
}

export default State;
