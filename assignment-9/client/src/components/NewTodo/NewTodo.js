import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTodo.scss';

// This component class adds my new todo by invoking a fetch post on the API
class NewTodo extends Component {
  state = {
    title: '',
    description: '',
    dueDate: '',
    dueTime: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ title: '', description: '', dueDate: '', dueTime: '' });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // This components renders a form for the user to fill in the details
  render() {
    return (
      <>
        <h1>Todo List React</h1>
        <form onSubmit={this.onSubmit} className="form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChange}
            className="title"
            required
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Add a description"
            value={this.state.description}
            onChange={this.onChange}
            className="description"
            required
          />
          <label htmlFor="due">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={this.state.dueDate}
            onChange={this.onChange}
            className="due"
            required
          />
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="dueTime"
            value={this.state.dueTime}
            onChange={this.onChange}
            className="time"
            required
          />

          <button type="submit" value="Submit">
            Add Todo
          </button>
        </form>
      </>
    );
  }
}

//PropTypes
NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default NewTodo;
