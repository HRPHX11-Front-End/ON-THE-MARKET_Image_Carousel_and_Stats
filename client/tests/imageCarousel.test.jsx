import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import ImageCarousel from '../src/components/ImageCarousel';

it('ImageCarousel renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCarousel />, div);
});

it('did the component mount', (done) => {
  const didMount = jest.spyOn(ImageCarousel.prototype, 'componentDidMount');
  const wrapper = mount(<ImageCarousel />);
  expect(didMount).toHaveBeenCalledTimes(1);

  setImmediate(() => {
    done();
  });
});
