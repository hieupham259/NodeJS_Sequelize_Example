const db = require('../models')
const Storages = db.Storages

// Create and Save a new Storage 
exports.create = async (req, res) => {
    // Validate the request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Invalid request'
        })
        return
    }

    const d = new Date();
    // Create a new Storage
    const storage = {
        name: req.body.name,
        private: req.body.private ? req.body.private : 1,
        createdAt: req.body.created_at ? req.body.created_at : null,
        updatedAt: req.body.updated_at ? req.body.updated_at : null,
    }
    
    // Save new record in the database
    Storages.create(storage)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Storage."
      });
    });
}