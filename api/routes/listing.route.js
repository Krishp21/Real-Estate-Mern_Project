import express from 'express';
import { createListing, deleteListing, updateListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create',verifyToken ,createListing);//create a new listing
router.delete('/delete/:id',verifyToken, deleteListing) //:id for dynamic route
router.post('/update/:id',verifyToken, updateListing) //:id for dynamic route
export default router;
