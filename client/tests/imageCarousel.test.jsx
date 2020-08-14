import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import ImageCarousel from '../src/components/ImageCarousel';

it('ImageCarousel renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCarousel />, div);
});

const wrapper = shallow(<ImageCarousel />);
wrapper.setState({ test: true });
expect(wrapper.state('test')).toEqual(true);
