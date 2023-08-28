
const storagePolices = require("../controllers/storagePolicies.controller.js")

var router = require("express").Router()

// Create a new Tutorial
router.post("/", storagePolices.create)

module.exports = router