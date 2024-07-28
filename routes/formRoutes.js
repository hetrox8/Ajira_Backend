const express = require('express');
const passport = require('passport');
const formController = require('../controllers/formController');
const router = express.Router();

router.post('/daily-attendance', passport.authenticate('jwt', { session: false }), formController.submitDailyAttendance);
router.post('/training-attendance', passport.authenticate('jwt', { session: false }), formController.submitTrainingAttendance);
router.get('/daily-attendance', passport.authenticate('jwt', { session: false }), formController.getDailyAttendance);
router.get('/training-attendance', passport.authenticate('jwt', { session: false }), formController.getTrainingAttendance);
router.post('/export', passport.authenticate('jwt', { session: false }), formController.exportToGoogleSheets);

module.exports = router;
