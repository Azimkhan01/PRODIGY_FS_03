require('dotenv').config()
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id:process.env.RAZOR_PAY_API_KEY || 'rzp_test_RQS8O5YFNP5n2l' ,
  key_secret: process.env.RAZOR_PAY_API_SECRET || '8WiV4R7lWWy5yN9dDikXYLHd',
});

exports.createOrder = async (req, res) => {
  try {
    // console.log(req.body);
    
    const { amount, currency = "INR", receipt, notes } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    // console.log("the amount: ",Number(amount.split(" ")[1]));
    
    // Amount in paise (Razorpay expects smallest currency unit)
    const options = {
      amount: Number(amount.split(" ")[1]) * 100, // ₹500 -> 50000 paise
      currency,
      receipt: receipt || "receipt#1",
      notes: notes || {},
    };

    const order = await razorpay.orders.create(options);
    console.log(order);
    
    return res.status(200).json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ message: "Failed to create order", error: err.message });
  }
};
