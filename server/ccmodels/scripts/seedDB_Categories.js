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

const CategorySeed = [
    {categoryName: "Breads, rolls, biscuits"},
    {categoryName: "Sweet breads, muffins"},
    {categoryName: "Cakes"},
    {categoryName: "Pastries"},
    {categoryName: "Cookies"},
    {categoryName: "Candy"},
    {categoryName: "Coated and uncoated nuts"},
    {categoryName: "Unroasted nut butters"},
    {categoryName: "Fruit butters"},
    {categoryName: "Canned jams or jellies"},
    {categoryName: "Fruit pies"},
    {categoryName: "Dehydrated fruit or vegetables, including dried beans"},
    {categoryName: "Popcorn and popcorn snacks"},
    {categoryName: "Cereal, including granola"},
    {categoryName: "Dry mixes"},
    {categoryName: "Vinegar"},
    {categoryName: "Pickles"},
    {categoryName: "Mustard"},
    {categoryName: "Roasted coffee or dry tea"},
    {categoryName: "Dried herbs and dried herb mixtures"}
];

db.Category
.remove({})
.then(() => db.Category.collection.insertMany(CategorySeed))
.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

