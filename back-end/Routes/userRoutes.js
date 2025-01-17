const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userController");
const { protected } = require("../Middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protected, allUsers);
router.route("/register").post(registerUser);
router.post("/login", authUser);
module.exports = router;
