import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup= async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //hashing the password with salt
    const newUser = new User({username, email, password:hashedPassword}); //save to database
    try{
        await newUser.save(); 
        res.status(201).json({message: "Signup success!"});
    }catch(error){
        res.status(500).json(error.message);
    }
}