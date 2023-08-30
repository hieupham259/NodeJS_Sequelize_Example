
const storages = require("../controllers/storage.controller.js")

var router = require("express").Router()

// Create a new Tutorial.
router.post("/", storages.create)

// Access to the storage.
router.post("/access", storages.accessStorage)

// Get all policies of the storage.
router.get("/policies", storages.getAllPolicies)

module.exports = router