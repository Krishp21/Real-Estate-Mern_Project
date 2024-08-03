import express from 'express';
import { test } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { updateUserInfo , getUserListings, getUser } from '../controllers/user.controller.js';
import { deleteUser } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUserInfo) //:id for dynamic route
router.delete('/delete/:id',verifyToken, deleteUser) //:id for dynamic route
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id',verifyToken, getUser)

export default router;