const express = require("express");

const router = express.Router();

router.route("/auth/login"); // for login
router.route("/auth/register"); //for register

router.route("/bill"); // for bill queries

router.route("/analytics"); // for budget analytics

module.exports = router;
