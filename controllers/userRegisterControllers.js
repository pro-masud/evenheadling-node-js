import axios from "axios";
import nodemailler from "nodemailer";
export const userRegister = async (req, res) => {
  // create a mailler transporter
  const transport =  nodemailler.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail transporter to gmail
 await transport.sendMail({
    from: `LWMR Group ${process.env.MAIL_ADDRESS}`,
    subject: "LWRM Students",
    to: req.body.email,
    text: `hello, I'm ${req.body.name} i'm a ${req.body.skills} Devs and i'm a ${req.body.age} Years Old`,
  });

  // create a axios package and send phone sms width in bulk sms bd 
  await axios.get(`http://bulksmsbd.net/api/smsapi?api_key=cxVzYEy04o7WVqpJOf77&type=text&number= ${req.body.cell}&senderid=889612443880&message= HI ${req.body.name}, You are ${req.body.age} Years old and you are a ${req.body.skills}`);

  res.status(200).json(console.log(req.body));
};
