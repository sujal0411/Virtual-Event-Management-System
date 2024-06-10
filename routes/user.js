var express = require('express');
var router = express.Router();
var userC = require('../controller/user');

router.post('/RegisterOrganizer', userC.RegisterOrganizer);
router.post('/OrganizerLogin', userC.OrganizerLogin);
router.post('/RegisterParticipant', userC.RegisterParticipant);
router.post('/ParticipantLogin',userC.ParticipantLogin);
router.patch('/:id', userC.sequre,userC.UpdateUserProfile);

module.exports = router;
