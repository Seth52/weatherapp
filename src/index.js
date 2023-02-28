import _ from 'lodash';
import './style.css';

console.log('hello');
function component() {
    const element = document.createElement('div');
 
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
 
    return element;
  }
 
  document.body.appendChild(component());
 