import React from 'react'
import ImageCarousel from './components/ImageCarousel.jsx'
import Description from './components/Description.jsx';
import Stats from './components/Stats.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
    <div>
     <ImageCarousel id='slider'/>
     <Description/>
     <Stats/>
    </div>
    )
  }
}