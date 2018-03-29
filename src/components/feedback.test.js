import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
});

it('renders some feedback', function () {
  let feedback = 'feedback';
  let wrapper = shallow(<Feedback feedback={feedback} />);
  expect(wrapper.contains(feedback)).toEqual(true);
});
