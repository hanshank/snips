import search from './lib/search.js';
// import SNIPS from './snippet-data.js';
import { renderSnips, fetchSnippets, highlightSnips } from './lib/snippets.js';

// fetchSnippets().then(snips => {
//   renderSnips(snips);
// });

async function init() {
  const snippets = await fetchSnippets();
  renderSnips(snippets);
  document.getElementById('search-bar').addEventListener('submit', search);
}

init();
