import express from 'express';
const router = express.Router();
import * as todoControllers from '../controllers/todo-controllers.js';

router.route('/todos').post(todoControllers.post).get(todoControllers.getAll);
router
  .route('/todo/:id')
  .get(todoControllers.get)
  .put(todoControllers.update)
  .delete(todoControllers.remove);

export default router;
