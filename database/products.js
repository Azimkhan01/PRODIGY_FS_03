const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/Ecommerce_Website';
mongoose.connect(mongoDB).then(()=>{
    console.log("Connected to sql succesfully")
});

let productSchema = mongoose.Schema({},{ strict: false });
let orderSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    ref_id:{
        type:String
    },
    payment:{
        type:String
    }
},{timestamps:true});
const products = mongoose.model("products",productSchema);
const feedback = mongoose.model("message",productSchema);
const order = mongoose.model("order",orderSchema);
module.exports = {products,feedback,order};