import Listing from '../models/listing.model.js';
export const createListing = async (req, res, next) => {
try {
    const listing= await Listing.create(req.body); //create a new listing   
    res.status(201).json(listing); //return the created listing to the user
} catch (error) {
    next(error);
}

}