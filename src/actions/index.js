import { UPDATE_MARKDOWN } from '../constants/actionTypes';

export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  markdown
});
