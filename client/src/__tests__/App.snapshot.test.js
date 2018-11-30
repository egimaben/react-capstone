import React from 'react';
import { App } from '../App';
import renderer from 'react-test-renderer'

console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('app renders correctly', () => {
  const fetchToken = jest.fn()
  const rendered = renderer.create(<App fetchToken={fetchToken} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});