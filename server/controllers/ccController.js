const db = require("../ccmodels");
const mongoose = require('mongoose');


mongoose.Promise = Promise;
// mongoose.connect("mongodb://heroku_bx92v1q4:f6lvg45a5ulejd6mtdl6epq04u@ds161048.mlab.com:61048/heroku_bx92v1q4");

//mongoose.connect(
mongoose.createConnection(
  process.env.MONGODB_URI || "mongodb://localhost/cottageconnect",
  {
    useMongoClient: true
  }
);

// Defining methods for the ccController
module.exports = {

  //==========================================
  // Cottage Routes:
  //==========================================

  findAllMerchants: function(req, res) {
    db.Cottage
      .find({isMerchant: true})
      .sort({businessName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllCustomers: function(req, res) {
    db.Cottage
      .find({isActiveCustomer: true})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCottage: function(req, res) {
    db.Cottage
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCottageById: function(req, res) {
    db.Cottage
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCottage: function(req, res) {
    db.Cottage
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCottage: function(req, res) {
    db.Cottage
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//==========================================
// Generic Merchant Search:
// Receives a .query in the req for the criteria
//==========================================

  searchMerchants: function(req, res) {
    db.Cottage
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //==========================================
  // Inventory Routes:
  //==========================================

  findMerchantInventory: function(req, res) {
    db.Inventory
      .find({cottageId: req.params.id})
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateInventory: function(req, res) {
    db.Inventory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createInventory: function(req, res) {
    db.Inventory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeInventory: function(req, res) {
    db.Inventory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Category Routes:
  //==========================================

  findAllCategories: function(req, res) {
    db.Category
      .find({})
      .sort({categoryName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCategory: function(req, res) {
    db.Category
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCategory: function(req, res) {
    db.Category
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCategory: function(req, res) {
    db.Category
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Saved Searches Routes:
  //==========================================

  findSavedSearches: function(req, res) {
    db.SavedSearches
      .find({customerId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSavedSearches: function(req, res) {
    db.SavedSearches
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSavedSearches: function(req, res) {
    db.SavedSearches
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSavedSearches: function(req, res) {
    db.SavedSearches
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Saved Merchants Routes:
  //==========================================

  findSavedMerchants: function(req, res) {
    db.SavedMerchants
      .find({customerId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSavedMerchants: function(req, res) {
    db.SavedMerchants
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createSavedMerchants: function(req, res) {
    db.SavedMerchants
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSavedMerchants: function(req, res) {
    db.SavedMerchants
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //==========================================
  // Message Routes:
  //==========================================

  findMessagesTo: function(req, res) {
    db.ccMessage
      .find({toId: req.params.id, messageType: "Email"})
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMessagesFrom: function(req, res) {
    db.ccMessage
      .find({senderId: req.params.id, messageType: "Email"})
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMerchantReviews: function(req, res) {
    db.ccMessage
      .find({toId: req.params.id, messageType: "Review"})
      .sort({ sortOrder: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createMessage: function(req, res) {
    db.ccMessage
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateMessage: function(req, res) {
    db.ccMessage
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  removeMessage: function(req, res) {
    db.ccMessage
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


};
