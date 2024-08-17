const {products} = require("../database/products");

const buy = async (req,res)=>{
    // console.log(req.params);
let main =await products.findOne({name:req.params.name}) ;
// console.log(main)  
res.render("buy",{
    name:req.params.name,
    price:main["price"],
    description:main["description"],
    image:main["image"],
    type:main["type"]
})
}

module.exports = {buy}