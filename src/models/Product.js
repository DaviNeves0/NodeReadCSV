const mongoose = require('mongoose');

// Model Products mongoDB Schema
const ProductSchema = new mongoose.Schema({
    code_bar: String,
    description: String,
    price: Number,
    quantity: Number
});
//Exporting Schema 
module.exports = mongoose.model('Product', ProductSchema);