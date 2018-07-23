import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Editor from '../components/Editor';
import Previewer from '../components/Previewer';

const App = ({ markdown }) =>
	<main className='wrapper'>
		<Editor
			markdown={markdown}
		/>
		<Previewer
			markdown={markdown}	
		/>
	</main>;

const mapStateToProps = (state) => ({
	markdown: state.markdown
});

export default connect(mapStateToProps)(App);
