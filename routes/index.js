const router = require("express").Router();
const user = require("./user");
const category = require("./category");
const userType = require("./userType");

router.use("/users", user);
router.use("/categories", category);
router.use("/userTypes", userType);

module.exports = router;
