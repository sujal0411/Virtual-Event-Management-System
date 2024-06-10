var express = require('express');
var router = express.Router();
var AnalyticC = require("../controller/analytic")

/* GET users listing. */
router.get('/:id', AnalyticC.ViewAnalytic);

module.exports = router;
