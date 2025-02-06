const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/send-email', (req, res) => {
    const { name, mobile, email, address, product, configuration, deliveryMode, deliveryDate, deliveryAddress, city, state, pinCode, comments } = req.body;

    const message = `
    Name: ${name}
    Mobile Number: ${mobile}
    Email: ${email}
    Address: ${address}
    Refurbished Product: ${product}
    Product Configuration: ${configuration}
    Mode of Delivery: ${deliveryMode}
    Delivery Date Expectations: ${deliveryDate}
    Delivery Address: ${deliveryAddress || 'N/A'}
    City: ${city || 'N/A'}
    State: ${state || 'N/A'}
    Pin Code: ${pinCode || 'N/A'}
    Additional Comments: ${comments}
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '3citsolutionsntelecom@gmail.com', // Your Gmail email address
            pass: 'zhad wxut qucp udvv'     // Your Gmail app password
        }
    });

    const mailOptions = {
        from: '3citsolutionsntelecom@gmail.com', // Sender's email
        to: 'enquiry@3citsolutions.com, admin@3citsolutions.com, ceodesk@3citsolutions.com, marketing@3citsolutions.com', 
        subject: 'Product Inquiry',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully!');
        }
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
