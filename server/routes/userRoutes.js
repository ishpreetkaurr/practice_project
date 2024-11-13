// routes/userRoutes.js
const express = require("express");
const {generateToken, validateToken} = require('../middlewares/jwtMiddleware');
const router = express.Router();
const { registerUser, loginUser, myAccount, updateProfile } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/myAccount",  validateToken, myAccount);

router.put("/myAccount", validateToken, updateProfile);

router.post("/myAccount",  validateToken, myAccount);


module.exports = router;