var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    vote: {type: Number, required: true},
    material: {type: String, required: true},
    weight: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true}
})

module.exports = mongoose.model('product',schema);