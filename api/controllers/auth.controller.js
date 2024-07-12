import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup= async (req, res,next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //hashing the password with salt
    const newUser = new User({username, email, password:hashedPassword}); //save to database
    try{
        await newUser.save(); 
        res.status(201).json({message: "Signup success!"});
    }catch(error){
        next(error); // middleware to handle errors
    }
}

export const signin = async (req, res, next) => {
    const {email, password} = req.body; //authenticate user
    try{
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404, 'User not found'));
        const isValidPassword = bcryptjs.compareSync(password, validUser.password);//bcryptjs to compare the password
        if(!isValidPassword) return next(errorHandler(400, 'Wrong Credentials')); //using middleware and error handler to handle errors
        const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET); //generate token
        const {password:pass, ...rest} = validUser._doc; //remove password from user info by destructuring 
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest); //store token in cookie
    } catch(error){
        next(error);
    }

}