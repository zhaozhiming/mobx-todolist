import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Icon, List, Checkbox } from 'semantic-ui-react';
import './Todo.css';

class Todo extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <List.Item>
        <List.Content>
          <div className="Todo-content">
            <Checkbox label={todo.task} onChange={this.toggle} />
            <Button
              size="small"
              onClick={() => this.props.deleteAction(todo.key)}
            >
              <Icon name="minus" />
            </Button>
          </div>
        </List.Content>
      </List.Item>
    );
  }

  toggle = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  };
}

export default observer(Todo);
