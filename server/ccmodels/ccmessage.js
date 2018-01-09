// Make use of the Mongoose ORM
const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new InventorySchema object
const ccMessageSchema = new Schema({

    // "Email", "Chat", or "Review"
    messageType: {type: String, required: false},

    // Only used when the messageType is "Review"
    reviewScore: {type: Number, required: false},

    // Message/Review Subject
    subject: {type: String, required: true},

    // Message/Review text
    messageText: {type: String,required: false},

    // `senderID` is a foreign key that stores the Cottage id
    // of the message sender or reviewer
    senderId: {type: Schema.Types.ObjectId,ref: "Cottage",required: true},

    // `toID` is a foreign key that stores an Cottage id that the message
    // is to be sent to, or in the case of messageType="Review", the 
    // Cottage id of the merchant that the review is about.
    toId: {type: Schema.Types.ObjectId,ref: "Cottage",required: true}

});

// This creates our model from the above schema, using mongoose's model method
const ccMessage = mongoose.model("ccMessage", ccMessageSchema);

// Export the ccMessage model
module.exports = ccMessage;
