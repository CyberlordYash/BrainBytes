const { Router } = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();
//register
router.post("/register", registerUser);
//login user
router.post("/login", loginUser);
//get user data
router.get("/:id", getUser);
//get authors data
router.get("/", getAuthors);
//change current avatar
router.post("/change-avatar", authMiddleware, changeAvatar);
//edit current users details
router.patch("/edit-user", authMiddleware, editUser);
module.exports = router;
