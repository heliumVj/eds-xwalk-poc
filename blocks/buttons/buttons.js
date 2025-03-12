import {
  loadCSS,
} from '../../scripts/aem.js';

export default function decorate(element) {
  console.log('blocks elements', element);
}

loadCSS('./buttons.css');
