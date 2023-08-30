
const storages = require("../controllers/storage.controller.js")

var router = require("express").Router()

// Create a new storage.
router.post("/", storages.create)

// Get all storages.
router.get("/", storages.getAll)

// Delete storage.
router.delete("/", storages.delete)

// Access to the storage.
router.post("/access", storages.accessStorage)

// Get all policies of the storage.
router.get("/policies", storages.getAllPolicies)

module.exports = router