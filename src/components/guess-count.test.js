import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('renders some feedback', function () {
    let feedback = 'feedback';
    let wrapper = shallow(<GuessCount guessCount={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});
