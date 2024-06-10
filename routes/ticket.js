var express = require('express');
var router = express.Router();
var ticketc = require("../controller/ticket");
var userc = require("../controller/user");

/* GET users listing. */
router.post('/CreateTicket',userc.sequre, ticketc.CreateTicket);
router.get('/', userc.sequre,ticketc.ViewTicket);
router.patch('/:id', userc.sequre,ticketc.UpdateTicket);
router.delete('/:id',userc.sequre, ticketc.DeleteTicket);

module.exports = router;
