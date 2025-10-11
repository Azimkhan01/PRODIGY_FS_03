const express = require("express")
const router = express.Router();
const {home} = require("../controller/home");
const { product } = require("../controller/product");
const { contact } = require("../controller/contact");
const { about } = require("../controller/about");
const { productApi } = require("../controller/productApi");
const {handleContact} = require("../controller/handleContact");
const {buy} = require("../controller/buy");
const {order} = require("../controller/order");
const { handleOrder } = require("../controller/handleOrder");
const { paymentSuccess } = require("../controller/success");
const { createOrder } = require("../controller/createOrder");

router.route(["/","/home"]).get(home);
router.route("/product").get(product);
router.route("/contact").get(contact);
router.route("/contact").post(handleContact);
router.route("/about").get(about);
router.route("/api/:filter?/:selling?").get(productApi);
router.route("/buy/:name?").get(buy);
router.route("/order/:name").get(order);
router.route("/order/:name").post(handleOrder);
router.route('/success').post(paymentSuccess)
router.route('/create-order').post(createOrder)
module.exports = {router}