import './App.scss';
import React from 'react';
import TodoList from './components/Todos/TodoList';
import NewTodo from './components/NewTodo/NewTodo';

// This is my main component class.
// The Webapp figuratively starts here (technically at the index.js)
class App extends React.Component {
  // This component holds the state of all my todos in an array and updates them whenever necessary
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  // This method will call the fetch PUT on Rest APi to update the completion status of the todo
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          const data = {
            completed: todo.completed,
            title: todo.title,
            description: todo.description,
            createdDate: todo.createdDate,
            dueDate: todo.dueDate,
            dueTime: todo.dueTime,
          };
          // console.log(data);
          const url = 'http://localhost:8000/todo/' + id;
          // console.log(url);
          fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
        return todo;
      }),
    });
  };

  // This method will call the fetch DELETE on Rest APi to delete the todo

  delTodo = (id) => {
    const url = 'http://localhost:8000/todo/' + id;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // This method will call the fetch POST on Rest APi to create a new todo

  addTodo = (todo) => {
    console.log(todo.title + todo.description + todo.dueTime);
    const data = {
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      dueTime: todo.dueTime,
    };

    fetch('http://localhost:8000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ todos: [...this.state.todos, data] });
      });
    console.log('added');
  };

  // Lifecycle method of react
  // I am using it to update the state of the todos at every cycle
  componentDidMount() {
    console.log('component did mount');
    let todoList = [];
    fetch('http://localhost:8000/todos')
      .then((response) => response.json())
      .then((data) => {
        todoList = data.map((todo, i) => {
          // todoList.push(todo);
          return todo;
        });

        this.setState({
          todos: todoList,
        });
      });
    // console.log(todoList);
  }

  // renders two things - adding the todo and viewing the todo
  render() {
    console.log('render ');
    const Todos = this.state.todos;
    return (
      <>
        <NewTodo addTodo={this.addTodo} />
        <TodoList
          Todos={Todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </>
    );
  }
}

export default App;
