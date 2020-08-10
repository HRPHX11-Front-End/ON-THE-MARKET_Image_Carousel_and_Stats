import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";


export default class ImageCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      propertyImages: ['./assets/propImages/1.jpg', './assets/propImages/2.jpg', './assets/propImages/3.jpg', './assets/propImages/4.jpg', './assets/propImages/5.jpg', './assets/propImages/6.jpg', './assets/propImages/7.jpg', './assets/propImages/8.jpg', './assets/propImages/9.jpg', './assets/propImages/10.jpg', './assets/propImages/11.jpg', './assets/propImages/12.jpg', './assets/propImages/13.jpg', './assets/propImages/14.jpg', './assets/propImages/15.jpg', './assets/propImages/16.jpg'],
    }

  }

  componentDidMount() {
    // let randomProperty = Math.ceil(Math.random() * Math.floor(9))

    // axios.get(`/images/propertyImages/:0${randomProperty}`)
    //   .then(data => {
    //     let propertyImages = data.data.response;
    //     const fileNames = propertyImages.map(index => index.Key);
    //     const filePaths = fileNames.map(names => `http://fecredfinproductimages.s3-us-west-1.amazonaws.com/${names}`);
    //     this.setState({ propertyImages: filePaths})
    //   })
    //   .catch(err => {
    //     console.log('error fetching image')
    //   })

  }




  render() {
    const {propertyImages} = this.state;
    if (!propertyImages) return <div>Images are not fetched yet!</div>
    return (
     <div>
     <Carousel class='slider' infiniteLoop >
       {propertyImages.map((img, i) => {
          return (
           <div>
             <img src={ img } alt='house' key={i}/>
           </div>
          )
         })
       }
     </Carousel>
     </div>
    )
  }
}