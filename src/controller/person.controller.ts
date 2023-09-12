//Importing required modules from the services folder
import {createAPerson, getAPerson, updateAPersonById, deleteAPersonById, getAllPersons} from '../service/person.service'
import express from 'express';

export const getAllPersonHandler = async (req:express.Request, res:express.Response) => {
    const getting = await getAllPersons()
    return res.status(200).send({status: 'success', data: getting})
}

export const createPersonHandler = async (req:express.Request,res:express.Response) => {
const { name} = req.body;
try {
    if (!name) {
        return res.status(400).send({message: 'name not found'});
    }
    const creating = await createAPerson({name})
    return res.status(200).send(creating);
}   catch (e) {
    return res.status(500).send({message: 'internal server error'});
}
}
export const getPersonHandler = async (req: express.Request, res: express.Response) => {
    const {id} = req.params;
 try {
    {
        if (!id) {
            return res.status(400).send({message: 'Id not found, please provide an id.'});
        }
        const get = await getAPerson(id);
        if (!get) {
            return res.status(400).send({message: 'Could not find id.'});
        }
        return res.status(200).send(get);
       }
 }  catch {
    return res.status(500).send({message: 'internal server error.'});
 }
}
export const updatePersonHandler = async (req: express.Request, res: express.Response) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        if (!id) {
            return res.status(400).send({message: 'id not found'});
        }
        if (!name) {
            return res.status(400).send({message: 'name not found.'})
        }
        const update = await updateAPersonById(id, {name});
        if (!update) {
            return res.status(400).send({message: 'update not found.'})
        }
        return res.status(200).send({message: update});
    }   catch {
        return res.status(500).send('internal server error.');
    }
}
export const deletePersonHandler = async (req: express.Request, res:express.Response) => {
    const {id} = req.params;
    try {
        const deleted = await deleteAPersonById(id);
        if (!deleted) {
            return res.status(400).send({message: 'The name not found'});
        }
        return res.status(200).send({message: 'deleted successfully'})
    }   catch {
        return res.status(500).send({message: 'internal server error.'});
    }
}