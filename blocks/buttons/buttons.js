import {
  loadCSS,
} from '../../scripts/aem.js';

export default function decorate(element) {
  console.log('blocks elements', element);
}

const css = await loadCSS(`${window.hlx.codeBasePath}/blocks/buttons/buttons.css`);

console.log(css);
