// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
const SavedMerchantsSchema = new Schema({
	// `customerID` is a foreign key that stores the Cottage id of the Customer
    customerId: {type: Schema.Types.ObjectId,ref: "Cottage",required: true},
    // `merchantId:` is a foreign key that stores the Cottage id of the saved merchant
    merchantId: {type: Schema.Types.ObjectId, ref: "Cottage", required: true},
    distance: {type: Number, required: false},
    remarks: {type: String, required: false}
});

// This creates our model from the above schema, using mongoose's model method
const SavedMerchants = mongoose.model("SavedMerchants", SavedMerchantsSchema);

// Export the Note model
module.exports = SavedMerchants;
