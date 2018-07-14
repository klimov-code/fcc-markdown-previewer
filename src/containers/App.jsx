import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from '../actions';
import './App.css';
import Editor from '../components/Editor';
import Previewer from '../components/Previewer';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.props.updateMarkdown(e.target.value);
	}
	
	render() {
		const { markdown } = this.props;
		
		return(
			<div>
				<Editor
					markdown={markdown}
					onChange={this.handleChange}
				/>
				<Previewer
					markdown={markdown}	
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	markdown: state.markdown
});

const mapDispatchToProps = (dispatch) => ({
	updateMarkdown: (markdown) => dispatch(updateMarkdown(markdown))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
