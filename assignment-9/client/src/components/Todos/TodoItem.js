import React from 'react';
import './TodoItem.scss';
import {
  FaCheck,
  FaUndoAlt,
  FaExpandAlt,
  FaWindowMinimize,
  FaTrash,
} from 'react-icons/fa';
import TodoDetails from './TodoDetails';

// This class is my component which holds all my todo-items ad process the each todo-item for rendering
class TodoItem extends React.Component {
  state = {
    isExpanded: false,
  };
  // This will togle the expanded view of the to-do
  toggle = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { id, title } = this.props.todo;

    // It renders a titiel and three task buttons
    return (
      <div className="ItemContainer">
        <div
          className={this.props.todo.completed ? 'text-strike' : null}
          id={this.state.isExpanded ? 'Selected' : 'null'}
        >
          {''} {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="del"
            title="Delete"
          >
            <FaTrash />
          </button>
          <button
            onClick={this.props.markComplete.bind(this, id)}
            className="complete"
            title={this.props.todo.completed ? 'Mark Pending' : 'Mark Done'}
          >
            {this.props.todo.completed ? <FaUndoAlt /> : <FaCheck />}
          </button>
          <button
            onClick={this.toggle}
            className="expand"
            title={this.state.isExpanded ? 'Hide' : 'View'}
          >
            {this.state.isExpanded ? <FaWindowMinimize /> : <FaExpandAlt />}
          </button>
          {this.state.isExpanded && <TodoDetails todo={this.props.todo} />}
        </div>
      </div>
    );
  }
}

export default TodoItem;
