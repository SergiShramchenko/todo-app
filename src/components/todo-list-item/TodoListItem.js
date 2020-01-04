import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const {
      name,
      done,
      imp,
      deleteItem,
      toggleDone,
      toggleImportant
    } = this.props;

    let doneClass = 'todo-list-item-span';
    let impClass = 'todo-list-item-li';

    if (done) {
      doneClass += ' toggleDone';
    }

    if (imp) {
      impClass += ' toggleImp';
    }

    return (
      <li className={impClass}>
        <span className={doneClass}>{name}</span>
        <div className="todo-item-list-div">
          <i className="material-icons done" onClick={toggleDone}>
            done
          </i>
          <i className="material-icons imp" onClick={toggleImportant}>
            emoji_objects
          </i>
          <i className="material-icons del" onClick={deleteItem}>
            delete
          </i>
        </div>
      </li>
    );
  }
}
