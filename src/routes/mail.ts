import { Router } from 'express';
import {
  addNewMail,
  deleteMail,
  getAllMails,
  contactUs,
} from '../controllers/mail.controller';

const router = Router();

router.post('/newMail', addNewMail);
router.get('/allMails', getAllMails);
router.delete('/deleteMail', deleteMail);
router.post('/contactUs', contactUs);

export default router;
