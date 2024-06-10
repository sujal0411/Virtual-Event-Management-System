const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    PeopleFlow : {
        type : String,
        required : true
    },
    Budget : {
        type : String,
        required : true
    },
    Speaker : {
        type : String,
        required : true
    },
    Guest : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let SESSION = mongoose.model('Session',sessionSchema);
module.exports = SESSION;