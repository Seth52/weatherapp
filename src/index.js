import _ from 'lodash';
import './style.css';
import {formBuild, weather} from './form';

console.log('hello');
function component() {
    const element = document.createElement('div');
 
   // Lodash, now imported by this script
    element.textContent = "Weather"
 
    return element;
  }
 
  document.body.appendChild(component());


weather();
 formBuild();
