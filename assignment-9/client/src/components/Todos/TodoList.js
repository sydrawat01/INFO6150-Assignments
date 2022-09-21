import React from 'react';
import './TodoList.scss';
import TodoItem from './TodoItem';

// This is my helper component class to pass on the props to my todoItem class
class TodoList extends React.Component {
  render() {
    return this.props.Todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

export default TodoList;
