import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import { Carousel } from 'react-responsive-carousel';
import '../styles/styles.css';
import '../styles/carousel.css';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyImages: [],
    };
  }

  componentDidMount() {
    const randomProperty = Math.ceil(Math.random() * Math.floor(9));
    axios.get(`/images/propertyImages/:0${randomProperty}`)
      .then((data) => {
        const propertyImages = data.data.response;
        const fileNames = propertyImages.map((index) => index.Key);
        const filePaths = fileNames.map((names) => `http://fecredfinproductimages.s3-us-west-1.amazonaws.com/${names}`);
        this.setState({ propertyImages: filePaths });
      })
      .catch((err) => {
        console.log('error fetching image', err);
      });
  }

  render() {
    const { propertyImages } = this.state;
    if (!propertyImages) return <div>Images are not fetched yet!</div>;
    return (
      <div>
        <Carousel class='slider' infiniteLoop>
          {propertyImages.map((img) => (
            <div key={uuid()}>
              <img src={img} alt='house' />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

/* ['./assets/propImages/1.jpg', './assets/propImages/2.jpg',
'./assets/propImages/3.jpg', './assets/propImages/4.jpg',
'./assets/propImages/5.jpg', './assets/propImages/6.jpg',
'./assets/propImages/7.jpg', './assets/propImages/8.jpg',
'./assets/propImages/9.jpg', './assets/propImages/10.jpg',
'./assets/propImages/11.jpg', './assets/propImages/12.jpg',
'./assets/propImages/13.jpg', './assets/propImages/14.jpg',
'./assets/propImages/15.jpg', './assets/propImages/16.jpg'] */

// import one from './assets/1.jpg';
// import two from './assets/2.jpg';
// import three from './assets/3.jpg';
// import four from './assets/4.jpg';
// import five from './assets/5.jpg';
// import six from './assets/6.jpg';
// import seven from './assets/7.jpg';
// import eight from './assets/8.jpg';
