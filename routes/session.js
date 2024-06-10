var express = require('express');
var router = express.Router();
var sessionc = require("../controller/session");
var userc = require("../controller/user")

/* GET users listing. */
router.post('/AddSession', userc.sequre,sessionc.AddSession);
router.get('/', userc.sequre,sessionc.ViewSession);
router.patch('/:id', userc.sequre, sessionc.UpdateSession);
router.delete('/:id',userc.sequre, sessionc.DeleteSession);

module.exports = router;
