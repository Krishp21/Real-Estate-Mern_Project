import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.post('/create', verifyToken, createListing); //verifyToken is middleware
router.delete('/delete/:id', verifyToken, deleteListing); //:id for dynamic route
router.post('/update/:id', verifyToken, updateListing); //:id for dynamic route
router.get('/get/:id', getListing);
router.get('/get', getListings);


export default router;
