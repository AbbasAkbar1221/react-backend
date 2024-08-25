const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/login', (req, res) => {
    res.send("Login Page");
});

router.get('/signup', (req, res) => {
    res.send("Signup Page");
});

router.post('/login' , authController.login);
router.post('/signup' , authController.signup);

router.get('/logout' , (req , res)=>{
    res.send("Logout Page");
})
