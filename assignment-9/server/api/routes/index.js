import todoRoutes from './todo-routes.js';

export default (app) => {
  app.use('/', todoRoutes);
};
