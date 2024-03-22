"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controller_1 = require("../controllers/mail.controller");
const router = (0, express_1.Router)();
router.post('/newMail', mail_controller_1.addNewMail);
router.get('/allMails', mail_controller_1.getAllMails);
router.delete('/deleteMail', mail_controller_1.deleteMail);
router.post('/contactUs', mail_controller_1.contactUs);
exports.default = router;
//# sourceMappingURL=mail.js.map