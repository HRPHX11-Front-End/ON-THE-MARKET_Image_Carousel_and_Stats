import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { mount } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import Description from '../src/components/Description';

it('Description renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description />, div);
});

it('did the component mount', (done) => {
  const didMount = jest.spyOn(Description.prototype, 'componentDidMount');
  const wrapper = mount(<Description />);
  expect(didMount).toHaveBeenCalledTimes(1);

  setImmediate(() => {
    done();
  });
});
