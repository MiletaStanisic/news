import * as React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';
import LinkButton from '../components/LinkButton';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: jest.fn()
}));


describe('<Card />', () => {
  const wrapper = shallow(<Card article={{
    title: 'Test title',
    description: 'Lorem ipsum',
    urlToImage: 'https://example.com',
  }} />);

  it('renders card correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('card'));
  });

  it('Click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<LinkButton onClick={mockCallBack} to={'article/id'} text="Read more" />));
    button.find('.btn').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});