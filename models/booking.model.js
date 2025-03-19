import { mongoose } from "mongoose";

let bookingSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    tour_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tours",
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

let booking = mongoose.model('bookings', bookingSchema)

export default booking