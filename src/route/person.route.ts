import express from 'express';
const router = express.Router();
import {createPersonHandler, updatePersonHandler, deletePersonHandler,getPersonHandler} from '../controller/person.controller';

router.post('/user', createPersonHandler);
router.get('/getuser/:id', getPersonHandler);
router.put('/updateuser/:id', updatePersonHandler);
router.delete('/deleteuser/:id', deletePersonHandler);
export default router;