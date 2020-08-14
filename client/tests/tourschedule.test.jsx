import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16.1';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import fetch from 'node-fetch';
import TourSchedule from '../src/components/TourSchedule';

it('Description renders withouth crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TourSchedule />, div);
});

const wrapper = shallow(<TourSchedule />);
expect(wrapper.contains(<div id='scheduleTour'>Schedule Tour</div>)).toBeTruthy;
