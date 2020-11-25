const router = require("express").Router();
const user = require("./user");
const category = require("./category");

router.use("/users", user);
router.use("/categories", category);

module.exports = router;
