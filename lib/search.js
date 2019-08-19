import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const includesAnyCase = (original, query) => original.toLowerCase().includes(query.toLowerCase());

export const search = event => {
  event.preventDefault();

  const queryText = event.target['search-text'].value;
  console.log(queryText);
  /* Look through SNIPS
    {
      title:
      description:
      language:
      code:
    }
  */
  // filter out the snips by said properties.
  const filteredSnips = SNIPS.filter(
    snippet =>
      includesAnyCase(snippet.title, queryText) ||
      includesAnyCase(snippet.description, queryText) ||
      includesAnyCase(snippet.code, queryText) ||
      includesAnyCase(snippet.language, queryText)
  );
  renderSnips(filteredSnips);
  // load the snippets after filtering
};

export default search;
