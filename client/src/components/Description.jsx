import React, { Component } from 'react';
import axios from 'axios';


export default class Description extends Component {
  constructor (props) {
    super(props);
    this.state = {
      description: ''
    }
  }

  componentDidMount() {
    axios.get('/description')
      .then(data => {
        let description = data.data.document.description;
        this.setState({ description: description})
      })
      .catch(err => {
        console.log('error fetching description')
      })
  }


  render() {
    return (
     <div>
     <p>{this.state.description}</p>
     </div>
    )
  }
}