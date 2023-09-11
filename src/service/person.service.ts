import { PersonModel } from "../model/person.model";
import { createPersonRequestBody, updatePersonRequestBody} from "../interface/person.interface";

export const createAPerson = async (body: createPersonRequestBody): Promise<any> => {
 const {name} = body;
const userDetails = await PersonModel.create ({name,});
return userDetails;
}
export const getAPerson = async (id:string): Promise<any> => {
    const person = await PersonModel.findById(id);
    if (!person) {
        throw new Error ('The user details is not available.');
    }
    return person;
}
export const updateAPersonById = async (id: string, body: updatePersonRequestBody): Promise<any> => {
    const { name } = body;
    const updating = await PersonModel.findById(id);
    if (!updating) {
        throw new Error('User not found');
    }
    if (name) {
        updating.name = name;
    }
    await updating.save();
    return updating;
}

export const deleteAPersonById = async (id: string): Promise<any> => {
    const user = await PersonModel.findById(id);
    if (!user) {
        throw new Error ('User details not found');
    }
    const deleting = await user.deleteOne();
    return deleting;
}