import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create',verifyToken ,createListing);//create a new listing
router.delete('/delete/:id',verifyToken, deleteListing) //:id for dynamic route
router.post('/update/:id',verifyToken, updateListing) //:id for dynamic route
router.get('/getListing/:id', getListing) //:id for dynamic route
router.get('/get',getListings)

export default router;
