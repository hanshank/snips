import search from './lib/search.js';
import SNIPS from './snippet-data.js';
import { renderSnips, highlightSnips } from './lib/snippets.js';

renderSnips(SNIPS);

document.getElementById('search-bar').addEventListener('submit', search);
