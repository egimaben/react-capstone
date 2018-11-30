import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';
import { mount } from 'enzyme';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('app renders without crashing', () => {
  const fetchToken = jest.fn()
  const div = document.createElement('div');
  ReactDOM.render(<App fetchToken={fetchToken} />, div);
  ReactDOM.unmountComponentAtNode(div);
});






