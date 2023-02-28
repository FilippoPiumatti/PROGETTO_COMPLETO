const { Double } = require("mongodb");
var mongoodr = require("mongoose");
var schema = mongoodr.Schema;

var schema = new mongoodr.Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    vote: {type: Number, required: true},
    material: {type: String, required: true},
    weight: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: String, required: true}
})

mongoodr.model.exports = mongoodr.model('product',schema);