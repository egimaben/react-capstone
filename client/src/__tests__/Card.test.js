import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card/Card';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('Card renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
