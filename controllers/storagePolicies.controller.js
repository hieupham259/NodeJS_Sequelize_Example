const db = require('../models')
const Storages = db.Storages
const StoragePolicies = db.StoragePolicies

// Create and Save a new Token for accessing to the Storage 
exports.create = async (req, res) => {
    // Validate the request
    if (!req.body.resource || !req.body.effect || !req.body.action) {
        res.status(400).send({
            message: 'Invalid request'
        })
        return
    }

    // Create a new Storage
    let expiredTime = new Date(Date.UTC(2024, 12, 31))
    const policy = {
        Effect: req.body.effect,
        Resource: req.body.resource,
        Action: req.body.action,
        // ExpiredTime: expiredTime.toLocaleString()
    }
    
    let token = btoa(JSON.stringify(policy))
    const storagePolicy = {
        storage: req.body.resource,
        token: token
    }

    // Save new record in the database
    StoragePolicies.create(storagePolicy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Policy for Storage."
      });
    });
}

// Delete policy of the given storage
exports.delete = async (req, res) => {
    // Validate the request
    if (!req.query.resource) {
        res.status(400).send({
            message: 'Invalid request'
        })
        return
    }

    try {
      // Validate storage id
      const storageExisted = await Storages.findByPk(req.query.resource)
      if (!storageExisted) {
        res.status(404).send({message: "Invalid storage"})
        return
      }
      await StoragePolicies.destroy({
        where: {
          id: req.query.resource
        }
      })
      res.status(200).send({message: "Success"})
    } catch (err) {
      console.log({err})
      res.status(400).send({message: err})
    }
}