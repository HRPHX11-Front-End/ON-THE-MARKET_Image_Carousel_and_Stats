import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import Description from './components/Description';
import Stats from './components/Stats';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ImageCarousel />
        <Description />
        <Stats />
      </div>
    );
  }
}
