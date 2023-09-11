import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const personSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 30
        }
    }
);
export const PersonModel = mongoose.model('Person', personSchema);