const express = require('express');
const router = express.Router();

// Controllers for the API
// Perform basic CRUD opertations and search functionality
const {
  createTodo,
  getTodoById,
  getTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} = require('../controllers/todo');

// Params: fetch the value from the URL
router.param('todoId', getTodoById);

// Get: All the todos
router.get('/todos/', getAllTodos);

// Get: Single todo
router.get('/todo/:todoId/', getTodo);

// Create: A todo
router.post('/todo/create/', createTodo);

// Update: A todo
router.put('/todo/:todoId/update', updateTodo);

// Delete: A todo
router.delete('/todo/:todoId/delete', deleteTodo);

// export the router, use it in index.js
module.exports = router;
