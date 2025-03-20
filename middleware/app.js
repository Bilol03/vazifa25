import express from 'express'

let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import guideRoute from '../routes/guide.route.js'
import tourRoute from '../routes/tour.route.js'

app.use(guideRoute)
app.use(tourRoute)

export { app }
