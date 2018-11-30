import React from 'react';
import renderer from 'react-test-renderer'
import CardBody from '../components/Card/CardBody';

console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('card renders correctly', () => {
  const rendered = renderer.create(<CardBody />);
  expect(rendered.toJSON()).toMatchSnapshot();
});