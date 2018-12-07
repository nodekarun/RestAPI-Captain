var mongoose = require('mongoose');

var VendorRegister = new mongoose.Schema({
    userId:Number,
    category:String,
    business_name:String,
    ownerName:String,
    address:String,
    vender_distance:String,
    latitude:String,
    longitude:String 
});

// Export the model
var VendorRegisters=mongoose.model('vendor_reg', VendorRegister)
module.exports = VendorRegisters
