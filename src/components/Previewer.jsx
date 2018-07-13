import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true
});

const renderer = new marked.Renderer();
renderer.link = (href, _, text) => `<a target='_blank' href='${href}'>${text}</a>`;

export default Previewer = ({ markdown }) =>
	<div 
		id='preview'
		dangerouslySetInnerHTML={{__html: marked(markdown, { renderer })}}
	/>