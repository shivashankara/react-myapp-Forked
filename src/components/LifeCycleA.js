import React, { Component } from 'react';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }
  render() {
    return <div />;
  }
}

export default LifeCycleA;
