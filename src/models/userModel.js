var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
});

// Export the model
module.exports = mongoose.model('users', userSchema);