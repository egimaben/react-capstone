import React from 'react';
import renderer from 'react-test-renderer'
import Card from '../components/Card/Card';

console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('card renders correctly', () => {
  const rendered = renderer.create(<Card />);
  expect(rendered.toJSON()).toMatchSnapshot();
});