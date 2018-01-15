import App from './app.js';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

// let root = document.getElementById('root');
// let p = document.createElement('p');
// let printText = () => {
//   p.textContent = App('Gibran 3');
// };
// printText();
// root.appendChild(p);

if (module.hot) {
  module.hot.accept();
}
