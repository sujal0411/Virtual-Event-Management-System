const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    EventName : {
        type : String,
        required : true
    },
    EventType : {
        type : String,
        required : true
    },
    EventPalace : {
        type : String,
        required : true
    },
    EventDate : {
        type : String,
        required : true
    },
    EventTime : {
        type : String,
        required : true
    },
    EventTicket : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let EVENT = mongoose.model('Event', eventSchema);
module.exports = EVENT;