import React from 'react';

import TodoListItem from '../todo-list-item';

import './todoList.css';

export default ({ data, deleteItem, toggleDone, toggleImportant }) => {
  const item = data.map(({ id, ...itemProps }) => (
    <TodoListItem
      key={id * Math.random()}
      {...itemProps}
      deleteItem={() => deleteItem(id)}
      toggleDone={() => toggleDone(id)}
      toggleImportant={() => toggleImportant(id)}
    />
  ));
  return (
    <div className="todo-list-div">
      <ul className="todo-list-ul">{item}</ul>
    </div>
  );
};
