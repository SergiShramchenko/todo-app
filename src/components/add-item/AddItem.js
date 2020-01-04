import React, { Component } from 'react';

import './addItem.css';

export default class AddIitem extends Component {
  state = {
    label: ''
  };

  onChange = e => {
    const label = e.target.value;
    this.setState({ label });
  };

  onSubmit = e => {
    e.preventDefault();

    const { addItem } = this.props;
    const { label } = this.state;
    addItem(label);
    this.setState({ label: '' });
  };

  render() {
    const { label } = this.state;
    return (
      <form className="add-item-div">
        <input
          className="add-item-input"
          placeholder="Please add one item"
          onChange={this.onChange}
          value={label}
          onSubmit={() => this.props.addIitem(label)}
        ></input>
        <button className="add-item-btn" onClick={this.onSubmit}>
          Add item
        </button>
      </form>
    );
  }
}
