import Listing from '../models/listing.model.js'
import {errorHandler} from '../utils/error.js'

export const createListing = async (req, res, next) => {
    try {
      const listing = await Listing.create(req.body);// create a new listing
      return res.status(201).json(listing);//return the listing
    } catch (error) {
      next(error);
    }
  };

export const deleteListing = async (req, res, next) => {
    const listing= await Listing.findById(req.params.id); //find the listing by id
    if(!listing) {return next(errorHandler(404, 'Listing not found'));} //if listing not found, return error

    if(req.user.id != listing.userRef){
        return next(errorHandler(401, 'Unauthorized')); //if user is not the creator of the listing, return error
    }

    try {
        await Listing.findByIdAndDelete(req.params.id); //delete the listing
        res.status(200).json('Listing deleted'); //return message to the user
    } catch (error) {
        next(error);
        
    }

}

export const updateListing = async (req, res, next) => {
    const listing= await Listing.findById(req.params.id); //find the listing by id
    if(!listing) {return next(errorHandler(404, 'Listing not found'));} //if listing not found, return error
    if(req.user.id != listing.userRef){
        return next(errorHandler(401, 'Unauthorized')); //if user is not the creator of the listing, return error
    }

    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new:true}); //update the listing
        res.status(200).json(updatedListing); //return the updated listing
    } catch (error) {
        next(error);
        
    }
}

export const getListing = async (req, res, next) => {
try {
    const listing= await Listing.findById(req.params.id); //find the listing by id
    if(!listing) {return next(errorHandler(404, 'Listing not found'));} //if listing not found, return error
    res.status(200).json(listing); //return the listing
} catch (error) {
    next(error);
    
}
}

export const getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 9; //limit the number of listings to show
        const startIndex = parseInt(req.query.startIndex) || 0; //start index of the listings
        let offer = req.query.offer; //filter by offer

        if (offer === undefined || offer === 'false'){
            offer= {$in : [false, true]}; //if offer is not specified, show all listings
            }
        
        let furnished = req.query.furnished; //filter by furnished

        if (furnished === undefined || furnished === 'false'){
            furnished= {$in : [false, true]}; //if furnished is not specified, show all listings
            }

        let parking = req.query.parking; //filter by parking

        if (parking === undefined || parking === 'false'){
            parking= {$in : [false, true]}; //if parking is not specified, show all listings
            }
        
        let type = req.query.type; //filter by type
        if(type === undefined || type === 'all'){
            type= {$in : ['sale', 'rent']}; //if type is not specified, show all listings
            }
        

        const searchTerm= req.query.searchTerm || ''; //search for listings
        const sort = req.query.sort || 'createdAt'; //sort the listings
        const order = req.query.order || 'desc'; //order of sorting ;descending by default

        const listings = await Listing.find(
            {name:{$regex: searchTerm, $options: 'i'}, offer, furnished, parking, type,}).sort({[sort]: order}).limit(limit).skip(startIndex) //regex is the default search functionality in mongodb and limit the number of listings to show
        return res.status(200).json(listings); //return the listings    
      
        } catch (error) {
        next(error);      
    }
}