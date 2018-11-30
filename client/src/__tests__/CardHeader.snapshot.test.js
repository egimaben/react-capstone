import React from 'react';
import renderer from 'react-test-renderer'
import CardHeader from '../components/Card/CardHeader';

console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('card renders correctly', () => {
  const rendered = renderer.create(<CardHeader />);
  expect(rendered.toJSON()).toMatchSnapshot();
});