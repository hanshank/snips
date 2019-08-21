import { renderSnips, fetchSnippets } from './snippets.js';

const includesAnyCase = (original, query) => original.toLowerCase().includes(query.toLowerCase());

export const search = async event => {
  event.preventDefault();

  const queryText = event.target['search-text'].value;
  /* Look through SNIPS
    {
      title:
      description:
      language:
      code:
    }
  */
  // TODO: Make an API call.
  const snips = await fetchSnippets();

  // TODO: Get API data

  // TODO: Use API data instead of SNIPS to filter and display

  // filter out the snips by said properties.
  const filteredSnips = snips.filter(
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
