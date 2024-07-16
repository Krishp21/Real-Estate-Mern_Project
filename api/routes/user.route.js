import express from 'express';
import { test } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { updateUserInfo } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUserInfo) //:id for dynamic route

export default router;