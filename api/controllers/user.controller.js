import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import Listing from '../models/listing.model.js';
export const test = (req, res) => {
   res.json({
     message: 'Api route is working!',
   });
 };


export const updateUserInfo = async (req, res, next) => { 
   if(req.user.id !== req.params.id) return next(errorHandler(401, "Only updating your own account is allowed")); //params.id is the parameter in the route
   try{
      if(req.body.password){
         req.body.password = bcryptjs.hashSync(req.body.password, 10); //if user is trying to update password, hash it
      }
      const updatedUser = await User.findByIdAndUpdate(req.params.id, 
         {$set: { //set since not all fields are required
         username:req.body.username,
         email:req.body.email,
         password:req.body.password,
         avatar:req.body.avatar,   
      },
   },{new:true}); //return the updated user

   const{password, ...rest} = updatedUser._doc; //remove password from user info
   res.status(200).json(rest); 
} catch(error){
   next(error);

   }
};

export const deleteUser = async (req, res, next) => {
   if(req.user.id !== req.params.id) return next(errorHandler(401, "Only deleting your own account is allowed"));//user.id is from verified user from jwt
   try{
      await User.findByIdAndDelete(req.params.id); //delete user
      res.clearCookie('access_token');
      res.status(200).json ("User deleted");
   } catch(error){
      next(error);
   }
}

export const getUserListings = async (req, res, next) => {
   if (req.user.id === req.params.id) {
     try {
       const listings = await Listing.find({ userRef: req.params.id });
       res.status(200).json(listings);
     } catch (error) {
       next(error);
     }
   } else {
     return next(errorHandler(401, 'You can only view your own listings!'));
   }
 };

export const getUser = async (req, res, next) => {
   try {
      const user= await User.findById(req.params.id);
      if(!user) return next(errorHandler(404, 'User not found'));
   
      const{password:pass, ...rest} = user._doc; //separator to remove password from user info
      res.status(200).json(rest);
   } catch (error) {
      next(error);
   }
 
}