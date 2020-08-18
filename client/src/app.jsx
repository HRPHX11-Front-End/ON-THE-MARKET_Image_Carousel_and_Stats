import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import Description from './components/Description';
import Stats from './components/Stats';
import TourSchedule from './components/TourSchedule';
import './styles/styles.css';
import './styles/carousel.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id='compMain'>
        <div id='mainContent'>
          <ImageCarousel />
          <Description />
          <Stats />
        </div>
        <div id='sideBar'>
          <TourSchedule name='tourSchedule' />
        </div>
      </div>
    );
  }
}
