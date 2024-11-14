const express = require("express");
const router = express.Router();
const { getNewsLetter, createNewsLetter} = require("../controllers/newsletterController");
const {generateToken, validateToken}  = require("../middlewares/jwtMiddleware");

router.get("/",getNewsLetter);

router.post("/",validateToken, createNewsLetter);

module.exports = router;