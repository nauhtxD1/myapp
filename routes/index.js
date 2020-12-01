const router = require("express").Router();
const user = require("./user");
const userType = require("./userType");
const category = require("./category");
const subcategory = require("./subcategory");
const post = require("./post");

router.use("/users", user);
router.use("/userTypes", userType);
router.use("/categories", category);
router.use("/subcategories", subcategory);
router.use("/posts", post);

module.exports = router;
