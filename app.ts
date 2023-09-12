require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import personRouter from './src/route/person.route';

const app = express();
const PORT = process.env.PORT || 8083; // Use the PORT environment variable or default to 8083
const connection = process.env.CONNECTION
app.use(bodyParser.json());
app.use('/api', personRouter);

app.listen(PORT, async () => {
    console.log(`Server is connected at port ${PORT}`);
    if (connection) {
        try {
            await mongoose.connect(connection, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions); // Add "as ConnectOptions" to explicitly cast the options.
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('Error connecting to MongoDB:', err);
        }
    } else {
        console.error('MONGODB_URI environment variable is not defined.');
    }
});
