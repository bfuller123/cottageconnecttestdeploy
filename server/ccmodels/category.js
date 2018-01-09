// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
const CategorySchema = new Schema({
    categoryName: {type: String, required: true},
});

// This creates our model from the above schema, using mongoose's model method
const Category = mongoose.model("Category", CategorySchema);

// Export the Note model
module.exports = Category;
