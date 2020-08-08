import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class ImageCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      propertyImages: []
    }
  }

  componentDidMount() {
    let randomProperty = Math.ceil(Math.random() * Math.floor(9))

    axios.get(`/images/propertyImages/:0${randomProperty}`)
      .then(data => {
        let propertyImages = data.data.response;
        const fileNames = propertyImages.map(index => index.Key);
        const filePaths = fileNames.map(names => `http://fecredfinproductimages.s3-us-west-1.amazonaws.com/${names}`);
        this.setState({ propertyImages: filePaths})
      })
      .catch(err => {
        console.log('error fetching image')
      })
  }

  render() {
    const {propertyImages} = this.state;
    if (!propertyImages) return <div>Images are not fetched yet!</div>

    return (
     <div>
     <Carousel class='slider'>
       {propertyImages.map((img, i) => {
          return (
           <div>
             <img src={ img } alt='house' key={i}/>
             <p>default</p>
           </div>
          )
         })
       }
     </Carousel>
     </div>
    )
  }
}