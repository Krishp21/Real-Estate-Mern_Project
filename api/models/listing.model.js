import exp from "constants";
import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: true,
    },
    description: 
    {
        type: String,
        required: true,
    },
    address: 
    {
        type: String,
        required: true,
    },
    regularPrice:
    {
        type: Number,
        required: true,
    },
    discountPrice:
    {
        type: Number,
        required: true,
    },
    bedrooms:
    {                   //Number of bedrooms   
        type: Number,
        required: true,
    },
    bathrooms:
    {                   //Number of bathrooms
        type: Number,
        required: true,
    },
    furnished:
    {                   //Furnished or not
        type: Boolean,
        required: true,
    },
    parking:
    {                   //Available or not
        type: Boolean,
        required: true,
    },
    type:
    {                   //Rent or Sale
        type: String,
        required: true,
    },
    offer:
    {                   //Offer available or not
        type: Boolean,
        required: true,
    },
    imageUrls:
    {
        type: Array,
        required: true,
    },
    userRef:
    {                 //Reference to the user who created the listing (Which user created the listing)
      
        type: String,
        required: true,
    },
    },
    {                   //Save the timestamps of the creation and updation of the listing
        timestamps: true,
    }

)

const Listing = mongoose.model('Listing', listingSchema);//Create a model from the schema
export default Listing; 