import SNIPS from './snippet-data.js';

console.log(SNIPS);

const renderSnips = snippets => {
  const snippetHTML = snippets
    .map(
      snippet => `
    <div class="snip">
    <div class="text">
      <h2>${snippet.title}</h2>
      <p>${snippet.description}</p>
    </div>

    <pre><code class="${snippet.language}">${he.encode(snippet.code)}</code></pre>
  </div>`
    )
    .join('');

  console.log(snippetHTML);

  const snippetsElem = document.querySelector('#snippets');
  snippetsElem.innerHTML = snippetHTML;
};

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
