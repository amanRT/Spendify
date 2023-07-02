const express = require("express");
const {
  deleteBill,
  createBill,
  updateBill,
  getBill,
  getAllBills,
} = require("../controllers/Bill");

const {
  getInfo,
  createInfo,
  updateInfo,
  deleteInfo,
} = require("../controllers/UserInfo");
const validateToken = require("../Middleware/validate");
const { currentUser, registerUser, loginUser } = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);
router.route("/bill/:user_id").get(getAllBills);

// router.route("/bill/:user_id").post(createBill);

router.route("/bill/:id").get(getBill).patch(updateBill).delete(deleteBill); // for bill queries

router
  .route("/analytics/:user_id")
  .get(getInfo)
  .post(createInfo)
  .patch(updateInfo)
  .delete(deleteInfo); // for budget analytics only one documnet

module.exports = router;
