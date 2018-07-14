import React from 'react';
import marked from 'marked';
import './Previewer.css'

marked.setOptions({
	breaks: true,
	gfm: true
});

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target='_blank' rel='noopener noreferrer' href='${href}' title='${title}'>${text}</a>`;
renderer.code = (code, language) => `<pre><code class='language-${language}'>${code}</code></pre>`;

const Previewer = ({ markdown }) =>
	<div 
		id='preview'
		className='previewer'
		dangerouslySetInnerHTML={{__html: marked(markdown || '', { renderer })}}
	/>;

export default Previewer;