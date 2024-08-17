const {feedback} = require("../database/products");


const handleContact =async (req,res)=>{
    const {name,email,message} =await  req.body;

    const add = await feedback.create({name,email,message});
    if(add)
    res.render("contact",{status:"You request is submited team will contact with you soon",color:"#99DD3E"});
else
  res.render("contact",{status:"you request is not noted try in some time ",color:"#F32D00"})
}

module.exports = {handleContact}