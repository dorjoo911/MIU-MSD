const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userCRUD");

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/_id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
