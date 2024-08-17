const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/Ecommerce_Website';
mongoose.connect(mongoDB).then(()=>{
    console.log("Connected to sql succesfully")
});

let productSchema = mongoose.Schema({},{ strict: false });

const products = mongoose.model("products",productSchema);
const feedback = mongoose.model("message",productSchema);
module.exports = {products,feedback};