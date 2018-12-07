var mongoose = require('mongoose');
var vendorCategories = new mongoose.Schema({
    id:Number,
    name:String,
    status:String,
    commission:String
});

var vendorCategories=mongoose.model('categories', vendorCategories)
module.exports = vendorCategories