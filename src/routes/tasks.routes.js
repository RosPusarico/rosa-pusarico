import { Router} from "express";
import tasksController from "../controllers/tasks.controller.js";
import { authenticateToken } from "../middlewares/authenticate.middleware.js"; 

const router = Router();

/*router.get('/',(req, res) => { 
    res.send('Bienvenido a tasks');
});

router.post('/',(req, res) => { 
    res.send('creando un tasks');
});*/

router.get('/',tasksController.getTasks);
router.post('/',tasksController.createTask);
router.get('/:id', tasksController.getTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);
router.patch('/:id', tasksController.taskDone);



//router.router('/:id').get(tasksController.getTask).put(tasksController.updateTask).delete(tasksController.delete).patch(tasksController.taskDone);

export default router;

