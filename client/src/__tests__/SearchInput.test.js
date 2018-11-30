import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from '../components/SearchInput';
import { mount } from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('Search input component renders without crashing', () => {
    const onSearchQueryChange = jest.fn()
  const div = document.createElement('div');
  ReactDOM.render(<SearchInput onSearchQueryChange={onSearchQueryChange} label='search' value='value'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Search input change handler is called when change happens', () => {
    const onSearchQueryChange = jest.fn()
    const component = mount(<SearchInput  onSearchQueryChange={onSearchQueryChange} label='search' value='value'/>);
    component.find('input').getDOMNode().value = 'value';
    component.find('input').simulate('change');
    expect(onSearchQueryChange).toHaveBeenCalled()
});
