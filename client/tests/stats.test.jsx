import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import Stats from '../src/components/Stats';

it('Stats renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stats />, div);
});

const wrapper = shallow(<Stats />);
expect(wrapper.contains(<p className='statsTitle'>Price Insights</p>)).toBeTruthy;
