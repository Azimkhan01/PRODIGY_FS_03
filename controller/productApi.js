const {products} = require("../database/products")

const productApi = async(req,res)=>{
let param = await req.params.filter; 
// console.log(param)
if(param == undefined)
    {
        const product =await  products.find({}).sort({ price: 'desc' });
        if(product)
            {
                res.json(product);
            }
            else{
                res.send("404 not found ")
            }
    } 
if(param != undefined)
{
    const product =await  products.find({type:param}).sort({ price: 'asc' });
        if(product)
            {
                res.json(product);
            }
            else{
                res.send("404 not found ")
            }
}


}

module.exports = {productApi};