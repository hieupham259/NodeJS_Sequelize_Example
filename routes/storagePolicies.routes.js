
const storagePolices = require("../controllers/storagePolicies.controller.js")

var router = require("express").Router()

// Create a new storage's policy
router.post("/", storagePolices.create)

// Delete policy of the given storage
router.delete("/", storagePolices.delete)

module.exports = router