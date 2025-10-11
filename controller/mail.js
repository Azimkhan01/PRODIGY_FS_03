const nodemailer = require("nodemailer");
const mail =async (name,email,product)=>{
  

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "azimuddeen3920496@mccmulund.ac.in",
        pass: "vuWciv-tuhqat-hepbe9",
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'azimuddeen3920496@mccmulund.ac.in', // sender address
        to: email, // list of receivers
        subject: `Order confirmation of ${product}`, // Subject line
        text: "Providing quality products and exceptional service with a commitment to customer satisfaction and timely delivery.", // plain text body
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px;">
        <header style="text-align: center; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">
            <h1 style="margin: 0; color: #333;">Order Confirmation ${product}</h1>
        </header>
        <main style="font-size: 16px; line-height: 1.6; color: #333;">
            <p style="margin: 0 0 10px;">Dear Customer ${name},</p>
            <p style="margin: 0 0 10px;">Thank you for placing your order with us. We have received your order details and will now review the payment information provided.</p>
            <p style="margin: 0 0 10px;">Our team will work diligently to process your order and dispatch it within 24 to 36 hours. You will receive a notification once your order has been shipped.</p>
            <p style="margin: 0;">If you have any questions or need further assistance, please feel free to contact our support team.</p>
        </main>
        <footer style="text-align: center; border-top: 1px solid #e0e0e0; padding-top: 10px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #777;">&copy; 2024 Local Trading Products. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>

`      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    
    
    
    
}

module.exports = {mail}