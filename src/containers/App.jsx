import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
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

