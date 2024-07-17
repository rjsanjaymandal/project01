const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUserId,
} = require("../controllers/user");
const router = express.Router();

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUserId);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
