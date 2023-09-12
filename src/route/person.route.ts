import express from 'express';
const router = express.Router();
import {createPersonHandler, updatePersonHandler, deletePersonHandler,getPersonHandler, getAllPersonHandler} from '../controller/person.controller';
router.get('/',getAllPersonHandler );
router.post('/user', createPersonHandler);
router.get('/getuser/:id', getPersonHandler);
router.put('/updateuser/:id', updatePersonHandler);
router.delete('/deleteuser/:id', deletePersonHandler);
export default router;