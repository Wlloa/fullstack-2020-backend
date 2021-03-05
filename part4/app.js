const express = require('express')
const app = express()
const config = require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const cors = require('cors')
const blogRouter = require('./controllers/blog')


logger.info(`Connecting to ${config.MONGODB_URI}`)

mongoose.connect(config.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {
    logger.info('Connected to MongoDB')
})
.catch( error => {
    logger.error('error connecting to MongoDB', error.message)
})

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app