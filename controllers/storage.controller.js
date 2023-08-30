const db = require('../models')
const Storages = db.Storages
const StoragePolicies = db.StoragePolicies

// Create and Save a new Storage 
exports.create = async (req, res) => {
    // Validate the request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Invalid request'
        })
        return
    }

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

// Take a token and access the storage
exports.accessStorage = async (req, res) => {
  // Validate the request
  if (!req.body.token || !req.body.action) {
    res.status(400).send({
      message: "Invalid request"
    })
    return
  }

  let token = req.body.token
  let action = req.body.action
  let policy = JSON.parse(atob(token))
  let storageId = policy.Resource
  let policyActions = policy.Action
  try {
    // Validate storage id
    const storage = await Storages.findByPk(storageId)
    if (!storage) {
      res.status(404).send({message: "Invalid storage"})
      return
    }
    let accessDenied = true
    policyActions.forEach(act => {
      if (act.toLowerCase() === action.toLowerCase()) {
        accessDenied = false
      }
    });
    
    res.status(200).send({
      message: accessDenied ? "Access Denied" : "Access Allowed"
    })
  } catch (err) {
    res.status(400).send({message: err})
  }
  
}

// Get all policies of the storage
exports.getAllPolicies = async (req, res) => {
  // Validate the request
  if (!req.query.storage) {
    res.status(400).send({
      message: "Invalid request"
    })
    return
  }

  let storageId = req.query.storage
  try {
    // Validate storage id
    const storageExisted = await Storages.findByPk(storageId)
    if (!storageExisted) {
      res.status(404).send({message: "Invalid storage"})
      return
    }
    const policies = await StoragePolicies.findOne({ where: { storage: storageId} });
    res.status(200).send(policies)
  } catch (err) {
    res.status(400).send({message: err})
  }
}

// Get all storages from Storage
exports.getAll = async (req, res) => {
  try {
    // Validate storage id
    const allStorages = await Storages.findAll()
    res.status(200).send(allStorages)
  } catch (err) {
    res.status(400).send({message: err})
  }
}

// Delete the storage
exports.delete = async (req, res) => {
  // Validate the request
  if (!req.query.storage) {
    res.status(400).send({
      message: "Invalid request"
    })
    return
  }
  try {
    // Validate storage id
    await Storages.destroy({
      where: {
        id: req.query.storage
      }
    })
    res.status(200).send({message: "Success"})
  } catch (err) {
    res.status(400).send({message: err})
  }
}