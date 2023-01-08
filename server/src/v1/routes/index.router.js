const express = require("express");
const router = express.Router();
const contactRouter = require("./contact.route");

router.use("/contact", contactRouter);

module.exports = router;
