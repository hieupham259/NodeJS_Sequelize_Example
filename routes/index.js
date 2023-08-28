const express = require('express')
const routes = express.Router()

routes.use('/storage', require('./storage.routes'))

module.exports = routes