import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import renderer from 'react-test-renderer';
const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  describe('Stage Participants', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordian sections={sections}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
 it('renders UI as expected', () => {
        const tree = renderer
            .create(<Accordian sections={sections}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
