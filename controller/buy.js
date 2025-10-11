const { products } = require("../database/products");

const buy = async (req, res) => {
    // console.log(req.params);
    let main = await products.findOne({ name: req.params.name });
    // console.log(main)
    if (main) {
        res.render("buy", {
            name: req.params.name,
            price: main["price"],
            description: main["description"],
            image: main["image"],
            type: main["type"],
            razor_pay_api_key : process.env.RAZOR_PAY_API_KEY,
            razor_pay_api_secret:process.env.RAZOR_PAY_API_SECRET
        })
    }
}
module.exports = { buy }