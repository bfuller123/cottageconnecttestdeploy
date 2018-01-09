// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
const SavedSearchesSchema = new Schema({
    // `categoryId:` is a foreign key that stores a Food Category id
    categoryId: {type: Schema.Types.ObjectId, ref: "Category", required: false},
	// `customerID` is a foreign key that stores the Cottage id of the Customer
    customerId: {type: Schema.Types.ObjectId,ref: "Cottage",required: true},
    distance: {type: Number, required: false},
    rating: {type: Number, required: false}
});

// This creates our model from the above schema, using mongoose's model method
const SavedSearches = mongoose.model("SavedSearches", SavedSearchesSchema);

// Export the Note model
module.exports = SavedSearches;
