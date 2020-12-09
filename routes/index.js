const router = require("express").Router();

const user = require("./user");
const userType = require("./userType");
const category = require("./category");
const subcategory = require("./subcategory");
const post = require("./post");
const contact = require("./contact");
const mark = require("./mark");
const comment = require("./comment");

router.use("/users", user);
router.use("/userTypes", userType);
router.use("/categories", category);
router.use("/subcategories", subcategory);
router.use("/posts", post);
router.use("/contacts", contact);
router.use("/marks", mark);
router.use("/comments", comment);

module.exports = router;
