import express from 'express';
import { signup, signin, signOut } from '../controllers/auth.controller.js';
import { google } from '../controllers/auth.controller.js';
const router = express.Router();
 
router.post("/signup",signup)
router.post("/signin",signin)
router.post('/google', google)
router.get('/signout', signOut) //get since we are not sending any data

export default router;