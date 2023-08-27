const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())

//simple route
app.get ("/", (req, res) => {
    res.json({message: "Welcome to the application!!!"})
})
    
// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log ("Server is running on port $(PORT)." )
})