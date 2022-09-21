import Todo from '../models/todo.js';

export const save = (newTodo) => {
  const todo = new Todo(newTodo);
  return todo.save();
};

export const get = (id) => {
  const todo = Todo.findById(id).exec();
  return todo;
};

export const getAll = () => Todo.find().sort('-createdAt').exec();
export const update = (id, todoItem) => {
  const todo = Todo.findByIdAndUpdate({ _id: id }, todoItem).exec();
  return todo;
};

export const remove = (id) => {
  const todo = Todo.findByIdAndDelete(id).exec();
  return todo;
};
