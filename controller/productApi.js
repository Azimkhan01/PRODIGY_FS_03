const {products} = require("../database/products")

const productApi = async(req,res)=>{
let param = await req.params.filter;
let param2 = await req.params.selling 
if(param2)
{
    if (param2 == "true")
        param2 = true
    else
     param2 = false

}
console.log(typeof(param2))
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
if(param != undefined && param2 == undefined)
{
    const product =await  products.find({type:param}).sort({ price: 'asc' });
        if(product)
            {
                res.json(product);
            }
            else{
                res.send("404 not found ");
            }
} 

if(param != undefined && param2 != undefined)
    {
        const product =await  products.find({selling:param2}).sort({ price: 'asc' });
            if(product)
                {
                    res.json(product);
                }
                else{
                    res.send("404 not found ");
                }
    } 


}

module.exports = {productApi};