// routes/userRoutes.js
const express = require("express");
const {generateToken, validateToken} = require('../middlewares/jwtMiddleware');
const router = express.Router();
const { registerUser, loginUser, myAccount } = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/myAccount",  validateToken, myAccount);
router.post("/myAccount",  validateToken, myAccount);

module.exports = router;