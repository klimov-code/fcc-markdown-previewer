import React from 'react';

export default Editor = ({ markdown, onChange }) =>
	<textarea
		id='editor'
		value={markdown}
		onChange={onChange}
		type='text'
	/>