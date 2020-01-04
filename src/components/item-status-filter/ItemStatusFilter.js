import React, { Component } from 'react';

import './itemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    const { onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = this.props.filter === name;
      const activeBtn = isActive
        ? 'item-status-btn act'
        : 'item-status-btn not-act';

      return (
        <button
          className={activeBtn}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="item-status-btn-div">{buttons}</div>;
  }
}
