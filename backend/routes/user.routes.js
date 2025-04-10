const express = require('express');
const router = express.Router();
const {body}= require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
],userController.registerUser
 ,(req, res) => {
    res.send('Register');
});


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.getProfile);
router.get('/logout', authMiddleware.authUser, userController.logoutUser);

module.exports = router;