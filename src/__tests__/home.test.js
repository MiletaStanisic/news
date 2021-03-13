import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../pages/home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: jest.fn(fn => fn())
}));

describe('Home', () => {
  it('should render component', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
