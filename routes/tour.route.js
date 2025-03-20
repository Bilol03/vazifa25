import { Router } from 'express'
import tourController from '../controller/tour.controller.js'
let route = Router()

route
	.get('/tours/:id', tourController.getTourById)
	.post('/tours', tourController.postTour)

export default route