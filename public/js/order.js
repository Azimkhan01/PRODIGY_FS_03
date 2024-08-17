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