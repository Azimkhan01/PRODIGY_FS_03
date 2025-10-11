const paymentSuccess = (req,res)=>{
   console.log(req.body);
   
   return  res.render('success')
}

module.exports = {paymentSuccess}