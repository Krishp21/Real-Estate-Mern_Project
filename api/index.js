import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((error) => {
    console.log('Error:', error);
    });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

// app.get('/test', (req, res) => {
//     res.send('Hello World'); //can send JSON, HTML, etc.
//     });

app.use("/api/user",userRouter);