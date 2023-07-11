import express from 'express';
import { config } from 'dotenv';
import routerUser from './router/user.router.js';
import mongoose from 'mongoose';
config();

const app = express();

async function connect() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Connected to MongoDb');

    } catch (error) {
        console.log(error);
    }
}

await connect()


app.use('/', routerUser)
app.listen(process.env.PORT, () => {
    console.log(`Application is running on ${process.env.PORT}`);
});
