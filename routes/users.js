const express = require("express");
const { getAllUsers, getCurrentUser } = require("../controllers/users");

const router = express.Router();

router.get("/", getAllUsers); // Esse endpoint auxilia apenas a manutenção do backend
router.get("/me", getCurrentUser);

module.exports = router;
