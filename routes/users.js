const express = require("express");
const { getAllUsers, getCurrentUser } = require("../controllers/users");

const router = express.Router();

// getAllUsers endpoint auxilia apenas a manutenção do backend
// getAllUsers endpoint is only for backend maintenance purposes
router.get("/", getAllUsers);
router.get("/me", getCurrentUser);

module.exports = router;
