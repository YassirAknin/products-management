const mongoose = require("./connection")


// product SCHEMA - Definition/ Shape of the Data type

const productSchema = new mongoose.Schema({
    title: {type: String, require: true},
    price: {type: Number, require: true},
    taxes: {type: Number, require: true},
    ads: {type: Number, require: true},
    discount: {type: Number, require: true},
    count: {type: Number, require: true},
    category: {type: String, require: true},
}, {timestamps: true})

// Product Model interface with the database for products
const Product = mongoose.model("Product", productSchema)


// Export the Product modul

module.exports = Product