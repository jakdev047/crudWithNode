const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

// get register form
router.get("/register", authController.getRegisterPage);

module.exports = router;
