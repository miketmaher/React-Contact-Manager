import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  }

  // componentWillMount() {
  //   console.log('Component Will mount');
  // }

  // componentDidUpdate() {
  //   console.log('Component did update');
  // }

  // componentWillUpdate() {
  //   console.log('Component will update');
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('Props received');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test;