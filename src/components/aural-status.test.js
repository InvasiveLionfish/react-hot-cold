import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('renders some feedback', function () {
    let feedback = 'feedback';
    let wrapper = shallow(<AuralStatus auralStatus={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});
