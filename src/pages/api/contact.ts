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
    template += `<span>${
      key === "deDonde" ? "Donde se entero de Nubesk" : key.toUpperCase()
    } :&nbsp;&nbsp; ${req.body[key]}</span></br>`;
  });
  let styles = `
    
    .main-template{
        padding: 10px;
    }
    .main-template span {
        color: #6d409c;
        display: block;
        font-size: 18px;
        padding: 0px 18px;
    }
    @media (min-width: 768px) {
        .main-template{
            padding: 50px;
        }
        .main-template span {
            font-size: 30px;
            padding: 0px 30px;
        }
    }
  `
  const mailData = {
    from: `Nubesk Website ${process.env.EMAIL}`,
    to: process.env.EMAIL_RECEIVE,
    subject: `${req.body.subject || "Alguien quiere que lo contactes"}`,
    text: `${req.body.subject || "Alguien quiere que lo contactes"}`,
    html: `<style>${styles}</style><div class="main-template">${template}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else res.json(info);
  });
  res.status(200);
};

export default mailer;
