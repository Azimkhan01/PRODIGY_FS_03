const  mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/Oauth';
mongoose.connect(mongoDB).then(()=>{
    console.log("Connected to sql succesfully")
});

const registeredSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    },
    password:{
        type: String,
        trim: true,
    }
},
{
    timestamps: true,
}
);

const register = mongoose.model("register",registeredSchema );

module.exports = {register};