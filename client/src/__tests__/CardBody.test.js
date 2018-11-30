import React from 'react';
import ReactDOM from 'react-dom';
import CardBody from '../components/Card/CardBody';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('Cardbody renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
