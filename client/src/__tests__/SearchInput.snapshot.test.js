import React from 'react';
import renderer from 'react-test-renderer'
import SearchInput from '../components/SearchInput';

console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('card renders correctly', () => {
    
  const rendered = renderer.create(<SearchInput onSearchQueryChange={jest.fn()} label='search' value='value' />);
  expect(rendered.toJSON()).toMatchSnapshot();
});