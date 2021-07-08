const mongoose = require('mongoose');

var schema = new mongoose.Schema({
   /* image : {
        type : String,
        
    },*/
    name : {
        type : String,
        required : true,
        unique: true
    },
    quantity: String,
})

const Userdb = mongoose.model('userdb',schema);
module.exports = Userdb;