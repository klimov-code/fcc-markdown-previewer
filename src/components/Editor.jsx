import React from 'react';
import './Editor.css';

const Editor = ({ markdown, onChange }) =>
	<div className='editor'>
		<textarea
			id='editor'
			className='editor__textarea'
			value={markdown}
			onChange={onChange}
			type='text'
			autoFocus={true}
		/>
	</div>

export default Editor;