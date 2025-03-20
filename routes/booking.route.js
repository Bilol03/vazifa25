import { Router } from 'express'
import bookingController from '../controller/booking.controller.js'
let route = Router()

route
	.get('/booking/:id', bookingController.getBookingById)
	.post('/booking', bookingController.postBooking)

export default route
