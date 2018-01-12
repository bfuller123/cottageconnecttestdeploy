const router = require("express").Router();
const ccController = require("../controllers/ccController");

// Require and use the bodyParser and express to correctly intepret the JSONs
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.use(bodyParser.json());

//==========================================
// Search for a merchant by SearchBox:
//==========================================
router.route("/merchants/search/:address:/:distance")
  .get(ccController.findMerchantBySearchBox);

//==========================================
// Cottage Routes:
//==========================================

// Matches with "/cc/merchants"
router.route("/merchants")
	.get(ccController.findAllMerchants)
	.post(ccController.createCottage);

router.route("/merchants/zip/:zipCode")
  .get(ccController.findMerchantByZip);

router.route("/merchants/category/:food")
  .get(ccController.findMerchantByFood);

router.route("/merchants/search/:zipCode/:food")
  .get(ccController.findMerchantByZipAndFood);

// Matches with "/cc/customers
router.route("/customers")
	.get(ccController.findAllCustomers)
	.post(ccController.createCottage);

// Matches with "/cc/cottages/update
router.route("/cottages/update")
	// .get(ccController.findCottageById)
	.post(ccController.updateCottage)
	// .delete(ccController.removeCottage);


// Matches with "/cc/cottages/load/:id
router.route("/cottages/load/")
	.post(ccController.findCottageById)
	//.put(ccController.updateCottage)
	//.delete(ccController.removeCottage);
//==========================================
// Category Routes:
//==========================================

// Matches with "/cc/categories/:id
router.route("/categories/:id")
	.put(ccController.updateCategory)
	.delete(ccController.removeCategory);

router.route("/categories")
	.get(ccController.findAllCategories)
	.post(ccController.createCategory);

  //==========================================
  // Saved Searches Routes:
  //==========================================

// Matches with "/cc/savedsearches/:id

router.route("/savedsearches/:id")
	.get(ccController.findSavedSearches)
	.put(ccController.updateSavedSearches)
	.delete(ccController.removeSavedSearches);

router.route("/savedsearches")
	.post(ccController.createSavedSearches);

  //==========================================
  // Saved Merchants Routes:
  //==========================================

// Matches with "/cc/savedmerchants/:id
router.route("/savedmerchants/:id")
	.get(ccController.findSavedMerchants)
	.put(ccController.updateSavedMerchants)
	.delete(ccController.removeSavedMerchants);

router.route("/savedmerchants")
	.post(ccController.createSavedMerchants);

  //==========================================
  // Message Routes:
  //==========================================

// Matches with "/cc/emailsto/:id
router.route("/emailsto/:id")
	.get(ccController.findMessagesTo);

// Matches with "/cc/emailsto/:id
router.route("/emailsfrom/:id")
	.get(ccController.findMessagesFrom);

// Matches with "/cc/emailsto/:id
router.route("/merchantreviews/:id")
	.get(ccController.findMerchantReviews);

// Matches with "/api/ccmessages
router.route("/ccmessages")
	.post(ccController.createMessage);

// Matches with "/api/ccmessages/:id
router.route("/ccmessages/:id")
	.put(ccController.updateMessage)
	.delete(ccController.removeMessage);

module.exports = router;
