const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

// get register form
router.get("/register", authController.getRegisterPage);

// post register form
router.post("/user-register", authController.createRegister);

module.exports = router;
