import Listing from '../models/listing.model.js';
export const createListing = async (req, res, next) => {
try {
    const listing= await Listing.create(req.body); //create a new listing   
    res.status(201).json(listing); //return the created listing to the user
} catch (error) {
    next(error);
}

}

export const deleteListing = async (req, res, next) => {
    const listing= await Listing.findById(req.params.id); //find the listing by id
    if(!listing) {return next(errorHandler(404, 'Listing not found'));} //if listing not found, return error

    if(req.user.id != listing.userRef){
        return next(errorHandler(401, 'Unauthorized')); //if user is not the creator of the listing, return error
    }

    try {
        await Listing.findByIdAndDelete(req.params.id); //delete the listing
    } catch (error) {
        next(error);
        
    }

}