const name = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
let submit = document.getElementById("submit");
submit.disabled = true;
submit.style.backgroundColor = "tomato"
address.addEventListener('change',(e)=>{
if(name.value != "" && e.target.value != "" && email.value != ""  )
{
    submit.disabled = false;
submit.style.backgroundColor = "#3498DB"
    
}
});

let payment = document.getElementById("payment")
let upiSection = document.getElementById("upi-section");
upiSection.innerHTML =  ""

payment.addEventListener("change",(e)=>{
if(e.target.value == "upi")
{
    let upiSection = document.getElementById("upi-section")
    upiSection.innerHTML = ` <h4>UPI Payment</h4>
                <p>UPI ID: <strong>7678084267@ptsbi</strong></p>
                <img src="/public/images/qrcode.jpg" alt="UPI QR Code" class="upi-qr-code">`
}else{
    upiSection.innerHTML = ""
}
})

// /public/js/order.js

document.getElementById("checkoutForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const paymentMethod = document.getElementById("payment").value;
  const amountText = document.getElementById("productPrice").innerText;
  const name = document.getElementById("productName").innerText;

  // Convert "₹ 1000" to 1000 number
  const amount = parseFloat(amountText.replace(/[^\d.]/g, ''));

  if (paymentMethod === "upi") {
    // Show UPI section
    document.getElementById("upi-section").style.display = "block";

    // 1. Create order on backend
    const response = await fetch('/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount * 100, // Razorpay works in paise
        currency: 'INR',
        receipt: `receipt_${Date.now()}`,
        notes: { name }
      })
    });

    const order = await response.json();
    alert(order.id);
    
    // 2. Razorpay options
    const options = {
      key: 'rzp_test_RQS8O5YFNP5n2l',
      amount: order.amount,
      currency: 'INR',
      name: 'My Store',
      description: 'Product Purchase',
      order_id: order.id,
      callback_url: `http://localhost:8000/success?orderNumber=${order.id}&deliveryDate=${encodeURIComponent(getDeliveryDate())}`,
      prefill: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: '9999999999'
      },
      theme: { color: '#F37254' }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  } else {
    // COD: submit the form normally
    this.submit();
  }
});

function getDeliveryDate() {
  const date = new Date();
  date.setDate(date.getDate() + 5); // 5 days from now
  return date.toDateString();
}
