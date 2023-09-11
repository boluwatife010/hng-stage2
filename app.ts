import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import personRouter from './src/route/person.route'
const app = express();
app.use(bodyParser.json());
app.use('/api', personRouter);
app.listen(8083, async () => {
    console.log('server is connected at port 8083');
    await mongoose.connect('mongodb://127.0.0.1/hng-personDetails');
    console.log('Connected to mongoDB');
});
export{};