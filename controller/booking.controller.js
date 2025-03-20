import bookingSchema from '../models/booking.model.js'
let postBooking = async (req, res) => {
	let { username, tour_id } = req.body
	if (!username || !tour_id)
		throw new Error("Ma'lumotlar to'liq kiritilmagan")
	let data = await bookingSchema.create({ username, tour_id })

	res.status(201).json({ message: 'Success', data })
}

let getBookingById = async(req, res) => {
    let data = await bookingSchema.findOne({_id: req.params.id}).populate('tour_id').exec()
    res.send(data)
}


export default {
    postBooking,
    getBookingById
}
