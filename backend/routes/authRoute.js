const express = require('express');
const router = express.Router();
const {signin, signout, requireSignin} = require('../controllers/authController');

// route list
router.post("/signin", signin);
router.get('/signout', signout);


// try to protect this route
router.get("/hello",requireSignin,(req, res) =>{
    res.send("Hello message from protected route");
});


// exports this route
module.exports = router;