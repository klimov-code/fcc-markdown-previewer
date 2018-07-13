import React from 'react';

const Editor = ({ markdown, onChange }) =>
	<textarea
		id='editor'
		value={markdown}
		onChange={onChange}
		type='text'
	/>;

export default Editor;