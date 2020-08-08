import React, { Component } from 'react';
import axios from 'axios';


export default class Stats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stats: ''
    }
  }

  componentDidMount() {

  }

  render() {
    return (
     <div>
     <h1>Hello from React Component Stats</h1>

     </div>
    )

  }
}