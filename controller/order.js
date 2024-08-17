const {products} = require("../database/products")
const order =async (req,res)=>{
    let param = req.params.name
    let main =await products.findOne({name:param});
    if(main)
    {
        res.render("order",{
         name:main["name"],
         description:main["description"],
         price:main["price"],
         image:main["image"]
        })
    }else{
        res.send("404 page not found");
    }

}

module.exports = {order}