const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

const routes = require('./routes')

const PORT = process.env.PORT || 5000

// var corsOptions = {
//     origin: `http://localhost:${PORT}`
// };
// app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/api', routes)

// healthcheck route
app.get ("/", (req, res) => {
    res.json({message: `Welcome to the application at ${PORT}.`})
})

// endpointcheck
const endPoints = require('express-list-endpoints');
app.get('/routes', (req, res) => {
    res.status(200).send(endPoints(app));
});
    
// listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});