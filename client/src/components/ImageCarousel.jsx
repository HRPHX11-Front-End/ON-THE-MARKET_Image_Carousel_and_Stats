import React, { Component } from 'react'
import axios from 'axios';



export default class ImageCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      propertyImages: ''
    }
  }

    componentDidMount() {
      axios.get('/images/propertyImages')
        .then(data => {
          this.setState({
            propertyImages: data
          })
        })
        .catch(err => {
          console.log('error fetching image')
        })
    }




  render() {
    return (
     <div>
     <h1>Hello from React Component ImageCarousel</h1>

     <p>{JSON.stringify(this.state.propertyImages)}</p>
     </div>
    )

  }

}