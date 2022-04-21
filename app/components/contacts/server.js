require('dotenv').config()

// routes.js
const router = require('express').Router()
const path = require('path');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const contactEmail = {
    //this is the authentication for sending email.
host: 'smtp.gmail.com',
port: 465,
secure: true, // use TLS

auth: {
    user: process.env.SMTP_TO_EMAIL,
    pass: process.env.SMTP_TO_PASSWORD,
},
}

const contactEmail1 = nodemailer.createTransport(contactEmail)
    transporter.verify((error, success) => {
if (error) {
    //if error happened code ends here
    console.error(error)
} else {
    //this means success
    console.log('Ready to send mail!')
}
});
router.post("/contact", (req, res) => {
    
     from: process.env.SMTP_FROM_EMAIL
     to:process.env.SMTP_TO_EMAIL
     subject: 'New Contact Form Submission'
      text:{`
        from:
        ${req.body.name}
  
        contact details
        email: ${req.body.email}
        phone: ${req.body.tel}
  
        message:
        ${req.body.message}`
    }
    contactEmail1.sendMail(mail, error => {
      if (error) {
        res.json({ status: "ERROR" })
      } else {
        res.json({ status: "Message Sent" })
      }
    })
})
const handleSubmitForm = async e => {
    e.preventDefault()
    setStatus("Sending...")
    const { name, email, phone, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
    }
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })
}
export default  handleSubmitForm ;         