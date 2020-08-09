import React, { Component } from 'react';
import axios from 'axios';


export default class Description extends Component {
  constructor (props) {
    super(props);
    this.state = {
      _id: '',
      __v: 0,
      description: '',
      listingAgent: '',
      listingFirm: '',
      lastChecked: '',
      lastUpdated: '',
      source: '',
    }
  }

  componentDidMount() {
    axios.get('/description')
      .then(data => {
        let desc = data.data.document;
        console.log('description', desc);
        for (var key in desc) {
          console.log(key)
          this.setState({ [key]: desc[key] })
        }
        console.log('desc', this.state.description)
        //let description = data.data.document.description;
        //this.setState({ description: description})

      })
      .catch(err => {
        console.log('error fetching description')
      })
  }


  render() {
    return (
     <div>
     <p id='description'>{this.state.description} {this.state.description} {this.state.description}</p>
     <div id='realtorInfo'>
       <p>Listed by {this.state.listingAgent} • {this.state.listingFirm} Realty</p>
       <p>Redfin last checked: {this.state.lastChecked} hours ago | Last updated {this.state.lastUpdated} • Source: {this.state.source}</p>
     </div>
     </div>
    )
  }
}