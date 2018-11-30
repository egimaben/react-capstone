import React from 'react';
import ReactDOM from 'react-dom';
import CardHeader from '../components/Card/CardHeader';
import { mount } from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('CardHeader renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});