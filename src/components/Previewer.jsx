import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true
});

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target='_blank' rel='noopener noreferrer' href='${href}' title='${title}'>${text}</a>`;

const Previewer = ({ markdown }) =>
	<div 
		id='preview'
		dangerouslySetInnerHTML={{__html: marked(markdown, { renderer })}}
	/>;

export default Previewer;