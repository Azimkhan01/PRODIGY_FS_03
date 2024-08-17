const express = require("express")
const router = express.Router();
const {home} = require("../controller/home");
const { product } = require("../controller/product");
const { contact } = require("../controller/contact");
const { about } = require("../controller/about");
const { productApi } = require("../controller/productApi");
const {handleContact} = require("../controller/handleContact");

router.route(["/","/home"]).get(home);
router.route("/product").get(product);
router.route("/contact").get(contact);
router.route("/contact").post(handleContact);
router.route("/about").get(about);
router.route("/api/:filter?/:selling?").get(productApi);

module.exports = {router}