import express from 'express';
const router = express.Router();
import * as contactsController from './../controllers/contacts-controller.js';


//  define routes for the application 
router.route('/contacts')
     .post(contactsController.post)
     .get(contactsController.index);

router.route('/contacts/:id')
        .get(contactsController.get)
        .put(contactsController.update)
        .delete(contactsController.remove);
        
      export default router;