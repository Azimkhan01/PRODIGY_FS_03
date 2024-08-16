const express = require("express")
const router = express.Router();
const {home} = require("../controller/home");
const { product } = require("../controller/product");
const { contact } = require("../controller/contact");
const { about } = require("../controller/about");

router.route(["/","/home"]).get(home)
router.route("/product").get(product)
router.route("/contact").get(contact)
router.route("/about").get(about)

module.exports = {router}