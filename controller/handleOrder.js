const {order} = require("../database/products")
const {mail} = require("./mail");
const handleOrder =async (req,res)=>{
let {name,email,address,ref_id,payment} = await req.body;
// console.log(name,email,address,ref_id,payment,req.body);
let addOrder = await order.create({name,email,address,ref_id,payment});
if(addOrder)
{
    mail(name,email);
    res.render("confirm");
}
}

module.exports = {handleOrder}