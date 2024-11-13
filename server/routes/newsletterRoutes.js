const express = require("express");
const router = express.Router();
const { getNewsletter, createNewsletter} = require("../controllers/newsletterController");
const {jwtMiddleware} = require("../middlewares/jwtMiddleware");

router.get("/",getNewsletter);

router.post("/",jwtMiddleware, createNewsletter);