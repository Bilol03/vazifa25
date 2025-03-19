const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
let GuideSchema = mongoose.Schema({
	name: { type: String, required: true, trim: true },
	experience: { type: Number, default: 0 },
	phoneNumber: {
        type: String,
        required: true
    },
    
})

GuideSchema.virtual("tours", {
    ref: "tours",
    localField: "_id",
    foreignField: "guides",
  });
  
  let User = mongoose.model("users", TourGudeSchema);
  module.exports = User;