import tourSchema from "../models/tour.model.js"

let getTourById = async(req, res) => {
    let data = await tourSchema.findOne({_id: req.params.id}).populate('guides').exec()
    res.send(data)
}

let postTour = async(req, res) => {
    let body = req.body
    let data = await tourSchema.create(body)
    res.status(201).json({message: "Success", data})
}

export default {
    getTourById,
    postTour
}