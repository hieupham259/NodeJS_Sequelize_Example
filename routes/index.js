const express = require('express')
const routes = express.Router()

routes.use('/storage', require('./storage.routes'))
routes.use('/storage-policies', require('./storagePolicies.routes'))

module.exports = routes