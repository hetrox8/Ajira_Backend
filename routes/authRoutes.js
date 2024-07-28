// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login); // Ensure this line is correct
router.get('/current', passport.authenticate('jwt', { session: false }), authController.getCurrentUser);

module.exports = router;
