import Mail from '../models/mail';
import Contact from '../models/contact';
import { Request, Response } from 'express';
import { sendMailFromContact } from '../services/mailing';

export const addNewMail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const mail = await Mail.findOne({ email: email });
    console.log(mail);
    if (!mail) {
      await Mail.create({ email });

      return res.status(201).json({ message: 'Mail added successfully' });
    }
    return res.status(400).json({ message: 'Mail already exists' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const getAllMails = async (_req: Request, res: Response) => {
  try {
    const mails = await Mail.find();
    const mailList = mails.map((mail) => mail.email);
    res.status(200).json({ mailList });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteMail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const mail = await Mail.findOneAndDelete({ email: email });
    if (mail) {
      return res.status(200).json({ message: 'Mail deleted successfully' });
    }
    return res.status(400).json({ message: 'Mail does not exist' });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const contactUs = async (req: Request, res: Response) => {
  const { name, surName, email, message } = req.body;
  console.log(req.body, '[---------------Req Body-----------------]');
  try {
    const newMail = await sendMailFromContact({
      name,
      surName,
      email,
      message,
    });
    console.log(newMail, '[---------------New Mail-----------------]');
    const newContact = await Contact.create({ name, surName, email, message });
    res.status(201).json({
      msg: `Thank you ${name} ${surName} for contacting us! We will get back to you as soon as posible.`,
    });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};
