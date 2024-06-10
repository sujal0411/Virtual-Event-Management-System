var express = require('express');
var router = express.Router();
var feedbackc = require("../controller/feedback");
var userc = require("../controller/user")

/* GET users listing. */
router.post('/AddFeedback', userc.sequre,feedbackc.AddFeedback);
router.get('/', userc.sequre,feedbackc.ViewFeedback);

module.exports = router;
