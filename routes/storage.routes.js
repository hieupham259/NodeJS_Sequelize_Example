
const storages = require("../controllers/storage.controller.js")

var router = require("express").Router()

// Create a new Tutorial
router.post("/", storages.create)

module.exports = router