var express = require('express');
var router = express.Router();
var eventc = require("../controller/event");
var userc = require("../controller/user");

/* GET users listing. */
router.post('/CreateEvent',userc.sequre,eventc.CreateEvent);
router.get('/',userc.sequre,eventc.ViewEvent);
router.patch('/:id',userc.sequre,eventc.UpdateEvent);
router.delete('/:id',userc.sequre,eventc.DeleteEvent);

module.exports = router;
