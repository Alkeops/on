import type { NextApiRequest, NextApiResponse } from "next";

const mailer = (req: NextApiRequest, res: NextApiResponse) => {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  let template: string = ``;
  Object.keys(req.body).forEach((key) => {
    template += `<span style="color: #6d409c; margin: 30">${
      key === "deDonde" ? "Donde se entero de Nubesk" : key
    } : ${req.body[key]}</span></br>`;
  });
  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECEIVE,
    subject: `${req.body.subject || "Alguien quiere que lo contactes"}`,
    text: `${req.body.subject || "Alguien quiere que lo contactes"}`,
    html: `<div>${template}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else res.json(info);
  });
  res.status(200);
};

export default mailer;
