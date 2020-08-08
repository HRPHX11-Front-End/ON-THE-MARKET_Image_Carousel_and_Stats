import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Images from './Images.jsx';


export default () => (
    <Carousel autoPlay>
      <div>
        <img alt="" src="https://fecredfinproductimages.s3-us-west-1.amazonaws.com/property_01/genMid.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img alt="" src="https://fecredfinproductimages.s3-us-west-1.amazonaws.com/property_02/genMid_003.jpg" />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  );



{/* <div>
<Images houseImages={this.state.propertyImages}/>
</div> */}