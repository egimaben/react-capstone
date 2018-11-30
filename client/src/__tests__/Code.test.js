import React from 'react';
import ReactDOM from 'react-dom';
import Code from '../components/Code/Code';
console.error = err => { throw new Error(err); };
console.warn = warning => { throw new Error(warning); };

it('Code component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Code language='bash' snippet='git status'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
