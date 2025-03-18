import { mongoose } from "mongoose";

let tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },   
    price: {
        type: Number,
        required: true
    },  
    location: {
        type: String,
        required: true
    },
    relationship: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'guides'
    }
})