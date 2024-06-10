const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    Review : {
        type : String,
        required : true
    },
    Message : {
        type : String,
        required : true
    },
    Rating : {
        type : String,
        required : true
    },
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }   
});
let FEEDBACK = mongoose.model('Feedback',feedbackSchema);
module.exports = FEEDBACK;