const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    TicketNo : {
        type : String,
        required : true
    },
    TicketPrice : {
        type : String,
        required : true
    },
    TicketType : {
        type : String,
        required : true
    },
    SeatNo : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let TCKT = mongoose.model('Ticket',ticketSchema);
module.exports = TCKT