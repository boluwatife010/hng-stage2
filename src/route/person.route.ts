import express from 'express';
const router = express.Router();
import {createPersonHandler, updatePersonHandler, deletePersonHandler,getPersonHandler, getAllPersonHandler} from '../controller/person.controller';
router.get('/',getAllPersonHandler );
router.post('/', createPersonHandler);
router.get('/:id', getPersonHandler);
router.put('/:id', updatePersonHandler);
router.delete('/:id', deletePersonHandler);
export default router;