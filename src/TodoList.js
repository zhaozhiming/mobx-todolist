import React, { Component } from 'react';
import {
  Input,
  Button,
  Icon,
  List,
  Checkbox,
  Divider,
} from 'semantic-ui-react';
import { observer } from 'mobx-react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends Component {
  filterTodo(filter, todos) {
    switch (filter) {
      case 'active':
        return todos.filter(x => !x.completed);
      case 'completed':
        return todos.filter(x => x.completed);
      default:
        return todos;
    }
  }

  renderFilters(store) {
    const filters = ['active', 'completed', 'all'];
    return filters.map(x => (
      <Checkbox
        radio
        key={x}
        style={{ marginLeft: 5 }}
        label={x[0].toUpperCase() + x.slice(1)}
        name="filter"
        value={store.filter}
        checked={store.filter === x}
        onClick={() => store.filter = x}
      />
    ));
  }

  render() {
    const store = this.props.store;
    const todos = this.filterTodo(store.filter, store.todos);
    return (
      <div className="TodoList-container">
        <div>
          <Input
            type="text"
            value={store.todo}
            onChange={e => store.changeTodo(e)}
          />
          <Button
            animated="vertical"
            style={{ marginLeft: 10 }}
            onClick={() => store.addTodo()}
          >
            <Button.Content hidden>Add</Button.Content>
            <Button.Content visible size="small">
              <Icon name="plus" />
            </Button.Content>
          </Button>
        </div>
        <div className="TodoList-list">
          <List verticalAlign="middle" selection>
            {todos.map(todo => (
              <Todo
                todo={todo}
                key={todo.key}
                deleteAction={key => store.deleteTodo(key)}
              />
            ))}
          </List>
        </div>
        <Divider />
        <div className="TodoList-footer">
          <div>
            {this.renderFilters(store)}
          </div>
          <div>
            {`${store.completedTodosCount} / ${store.todos.length}`}
          </div>
          <div>
            <Button size="tiny" onClick={() => store.clearCompleted()}>
              Clear Completed
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(TodoList);
