import React, { Component } from 'react';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import TodoList from './components/todo-list';
import AddItem from './components/add-item';

import './App.css';

// utils
import toggleProperty from './utils/toggleProperty';
import compareSearchToData from './utils/compareSearchToData';
import createItem from './utils/createItem';
import filterToggle from './utils/filterToggle';
import delItem from './utils/delItem';

export default class App extends Component {
  state = {
    data: [
      createItem('I need to take more notes'),
      createItem('lets try to stop wasting your time')
    ],
    term: '',
    filter: 'all'
  };

  deleteItem = id => {
    this.setState(({ data }) => {
      return {
        data: delItem(data, id)
      };
    });
  };

  addItem = text => {
    if (text === '') return;

    const newItem = createItem(text);

    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      };
    });
  };

  // Toggle Done/Important

  toggleDone = id => {
    this.setState(({ data }) => {
      return {
        data: toggleProperty(data, id, 'done')
      };
    });
  };

  toggleImportant = id => {
    this.setState(({ data }) => {
      return {
        data: toggleProperty(data, id, 'imp')
      };
    });
  };

  // Search and Fliter

  onSearchChange = term => this.setState({ term });

  onFilterChange = filter => this.setState({ filter });

  // render ()

  render() {
    const { data, term, filter } = this.state;

    const {
      onSearchChange,
      onFilterChange,
      deleteItem,
      toggleDone,
      toggleImportant,
      addItem
    } = this;

    const visibleItems = filterToggle(compareSearchToData(data, term), filter);

    const doneCount = this.state.data.filter(el => el.done).length;
    const todoCount = data.length - doneCount;

    return (
      <div className="App">
        <AppHeader done={doneCount} toDo={todoCount} />
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
        <TodoList
          data={visibleItems}
          deleteItem={deleteItem}
          toggleDone={toggleDone}
          toggleImportant={toggleImportant}
        />
        <AddItem addItem={addItem} />
      </div>
    );
  }
}
