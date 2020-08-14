import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import Description from '../src/components/Description';

it('Description renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description />, div);
});

const wrapper = shallow(<Description />);
wrapper.setState({ test: true });
expect(wrapper.state('test')).toEqual(true);
