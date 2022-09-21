// import req from 'express/lib/request.js';
import * as todoServices from '../services/todo-services.js';

const setErrorResponse = (error, response) => {
  response.status(500);
  response.json(error);
};
const setSuccessResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

export const post = async (request, response) => {
  try {
    const payload = request.body;
    const todo = await todoServices.save(payload);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// export const index = async (request, response) => {
//   try {
//   } catch (error) {
//     setErrorResponse(error, response);
//   }
// };

export const get = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await todoServices.get(id);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const getAll = async (request, response) => {
  try {
    const todos = await todoServices.getAll();
    setSuccessResponse(todos, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const update = async (request, response) => {
  try {
    const id = request.params.id;
    const updated = { ...request.body };
    updated.id = id;
    const todo = await todoServices.update(id, updated);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
export const remove = async (request, response) => {
  try {
    const id = request.params.id;
    const todo = await todoServices.remove(id);
    setSuccessResponse(todo, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
