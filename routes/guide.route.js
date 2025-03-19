import { Router } from 'express'
import guideController from '../controller/guide.controller.js'
let route = Router()

route
	.get('/guides', guideController.getGuides)
	.post('/guides', guideController.postGuide)

export default route
