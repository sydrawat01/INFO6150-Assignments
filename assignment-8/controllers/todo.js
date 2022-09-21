const Todo = require('../models/todo');

exports.getTodoById = (request, response, next, todoId) => {
  // Get the todoId from the router.param
  // Use the .findById() method to find the todo which has id equal to todoId
  Todo.findById(todoId).exec((err, todo) => {
    if (err || !todo) {
      return response.status(400).json({
        error: '404 Error! Sorry, not found!',
      });
    }
    // Storing the todo in request.todo
    request.todo = todo;
    // Middleware: Need to call next()
    next();
  });
};

exports.getAllTodos = (request, response) => {
  // .find() function to return all the todos from the DB
  Todo.find()
    .sort('-createdAt')
    .exec((err, todos) => {
      // Check for errors
      if (err || !todos) {
        return response.status(400).json({
          error: 'Something went wrong!',
        });
      }
      // return all todos in JSON format
      response.json(todos);
    });
};

exports.getTodo = (request, response) => {
  // Use the middleware to get the Todo from the URL ID
  // request.todo -> middleware
  return response.json(request.todo);
};

exports.createTodo = (request, response) => {
  // Get JSON data -> request.body
  const todo = new Todo(request.body);

  // Create: Todo instance by passing 'title' field from 'request.body'
  todo.save((err, title) => {
    if (err || !title) {
      return response.status(400).json({
        error: 'something went wrong',
      });
    }
    // Send: Created todo as a JSON response
    response.json({ title });
  });
};

exports.updateTodo = (request, response) => {
  // request.todo -> getTodoById() middleware
  // GET the todo that user wants to update
  const todo = request.todo;
  // Update: Title of the todo that user wants to update: request.body.title
  todo.title = request.body.title;

  // Save: Updated todo
  todo.save((err, todo) => {
    // Check for errors
    if (err || !todo) {
      return response.status(400).json({
        error: 'something went wrong while updating',
      });
    }
    // Send: Updated todo as a JSON response
    response.json(todo);
  });
};

exports.deleteTodo = (request, response) => {
  // request.todo -> getTodoById() middleware
  // Get: Todo that user wants to delete
  const todo = request.todo;
  // Call .remove() method to delete
  todo.remove((err, title) => {
    if (err || !title) {
      return response.status(400).json({
        error: 'something went wrong while deleting the category',
      });
    }
    // Send: Deleted todo and success message as a JSON response
    response.json({
      title_deleted: title,
      message: 'Todo deleted successfully!',
    });
  });
};
