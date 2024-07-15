import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import { error } from 'console';
dotenv.config();

// Connect to MongoDB

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((error) => {
    console.log('Error:', error);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

// app.get('/test', (req, res) => {
//     res.send('Hello World'); //can send JSON, HTML, etc.
//     });

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((error, req, res, next) => {    
    const statusCode = error.statusCode || 500; //default 500 (internal server error)
    const message= error.message || 'Internal Server Error';
    return res.status(statusCode).json({
    success: false,
    statusCode,
    message,    
    
    });
});
