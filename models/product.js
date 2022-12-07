const mongoose = require("./connection")


// product SCHEMA - Definition/ Shape of the Data type

const productSchema = new mongoose.Schema({
    title: {type: String, require: true},
    price: Number,
    taxes: Number,
    ads: Number,
    discount: Number,
}, {timestamps: true})

// Product Model interface with the database for products
const Product = mongoose.model("Product", productSchema)


// Export the Product modul

module.exports = Product