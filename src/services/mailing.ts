import { createTransport } from 'nodemailer';
import 'dotenv/config';

const transporter = createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.BREVO_API_KEY,
  },
});
type Email = {
  name: string;
  surName: string;
  email: string;
  message: string;
};

export async function sendMailFromContact(body: Email) {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'From Contact Us eStudents',
    html: createEmail(body),
  });
}

const createEmail = (body: Email) => {
  return `
   <!DOCTYPE html>
  <html lang="es">
    <style>
    html {
      background-color: #ffffff;
    }
  
    body {
      max-width: 600px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: auto;
      background-color: rgb(229, 255, 246);
      padding: 40px;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    h1 {
      color: #17415f;
      margin-bottom: 20px;
    }
  
    p {
      margin-bottom: 15px;
      color: #17415f;
    }
  
    a {
      color: #17415f;
      text-decoration: none;
      font-style: italic;
      font-weight: bold;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    strong {
      color: #17415f;
    }
  
    .firma {
      font-weight: bold;
      color: #ff8c00;
    }
    </style>
     <body>
    <h1>From: ${body.name}, ${body.surName}</h1>
    <p>Email: ${body.email}</p>
    <p>${body.message}</p>
    </body>
  </html>
  `;
};
