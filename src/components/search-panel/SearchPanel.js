import React, { Component } from 'react';

import './searchPanel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };

  onTrackSearch = e => {
    const term = e.target.value;

    this.setState({ term });
    this.props.onSearchChange(term);
    console.log(term);
  };

  render() {
    return (
      <div className="input-div">
        <input
          className="search-panel"
          placeholder="Type to search"
          onChange={this.onTrackSearch}
          value={this.state.term}
        ></input>
      </div>
    );
  }
}
