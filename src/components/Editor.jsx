import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from '../actions';
import './Editor.css';

const LINE_HEIGHT = 18;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.mounted = true;

    this.setRows();
  }

  setRows() {
    if (this.mounted) {
      const oldRows = this.textArea.rows;
      this.textArea.rows = 1;
      const newRows = ~~(this.textArea.scrollHeight / LINE_HEIGHT);

      this.textArea.rows = oldRows !== newRows ? newRows : oldRows;
    }
  }

  handleChange(e) {
    this.props.updateMarkdown(e.target.value);
    this.setRows();
  }

  render() {
    const { markdown } = this.props;

    return (
      <div className="editor">
        <textarea
          id="editor"
          className="editor__textarea"
          value={markdown}
          type="text"
          autoFocus={true}
          onChange={this.handleChange}
          ref={textArea => (this.textArea = textArea)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateMarkdown: markdown => dispatch(updateMarkdown(markdown)),
});

export default connect(
  null,
  mapDispatchToProps
)(Editor);
