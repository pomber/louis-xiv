import { Component } from "react";
import ReactDOM from "react-dom";

class State extends Component {
  state = { ...this.props.init };

  render() {
    const setState = (s, se) => this.setState(s, se);
    const deferredSetState = (s, se) =>
      ReactDOM.unstable_deferredUpdates(() => this.setState(s, se));

    const state = this.props.map
      ? this.props.map(this.state, setState, deferredSetState)
      : this.state;

    return this.props.children(state, setState, deferredSetState);
  }
}

export default State;
