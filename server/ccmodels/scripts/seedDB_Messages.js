const mongoose = require("mongoose");
const db = require("../");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/cottageconnect",
    {
        useMongoClient: true
    }
);

db.Cottage.find()
.then(data => {

    let merchant1Id = data[1]._id;
    let merchant2Id = data[2]._id;
    let merchant3Id = data[5]._id;
    let customer1Id = data[0]._id;
    let customer2Id = data[2]._id;
    let customer3Id = data[4]._id;

    const ccMessageSeed = [
        {
            messageType: "Email",
            reviewScore: 0,
            subject: "Pricing",
            messageText: "How much do your Pizza Eclairs cost?",
            senderId: customer1Id,
            toId: merchant1Id
        },
        {
            messageType: "Review",
            reviewScore: 0,
            subject: "Caramels",
            messageText: "Can I get vegan caramels? NO! They said THERE'S NO SUCH THING!!! They were MEAN TO ME!!!",
            senderId: customer2Id,
            toId: merchant2Id
        },
        {
            messageType: "Review",
            reviewScore: 3,
            subject: "It is NOT PIZZA!!!",
            messageText: "Tastes good, but it has pineapple on it! Therefore it is NOT pizza!!!!!",
            senderId: customer3Id,
            toId: merchant3Id
        }
    ];

    db.ccMessage
    .remove({})
    .then(() => db.ccMessage.collection.insertMany(ccMessageSeed))
    .then(data => {
        console.log(data.insertedIds.length + " message records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
});
