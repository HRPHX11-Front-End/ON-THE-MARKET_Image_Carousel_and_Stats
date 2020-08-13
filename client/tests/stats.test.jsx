import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import Stats from '../src/components/Stats';

it('Stats renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stats />, div);
});

it('did the component mount', (done) => {
  const didMount = jest.spyOn(Stats.prototype, 'componentDidMount');
  const wrapper = mount(<Stats />);
  expect(didMount).toHaveBeenCalledTimes(1);

  setImmediate(() => {
    done();
  });
});
