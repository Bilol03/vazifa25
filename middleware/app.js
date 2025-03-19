import express from 'express'

let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import guideRoute from '../routes/guide.route.js'

app.use(guideRoute)

export { app }
