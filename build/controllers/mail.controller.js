"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUs = exports.deleteMail = exports.getAllMails = exports.addNewMail = void 0;
const tslib_1 = require("tslib");
const mail_1 = tslib_1.__importDefault(require("../models/mail"));
const contact_1 = tslib_1.__importDefault(require("../models/contact"));
const mailing_1 = require("../services/mailing");
const addNewMail = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const mail = yield mail_1.default.findOne({ email: email });
        console.log(mail);
        if (!mail) {
            yield mail_1.default.create({ email });
            return res.status(201).json({ message: 'Mail added successfully' });
        }
        return res.status(400).json({ message: 'Mail already exists' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.addNewMail = addNewMail;
const getAllMails = (_req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const mails = yield mail_1.default.find();
        const mailList = mails.map((mail) => mail.email);
        res.status(200).json({ mailList });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getAllMails = getAllMails;
const deleteMail = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const mail = yield mail_1.default.findOneAndDelete({ email: email });
        if (mail) {
            return res.status(200).json({ message: 'Mail deleted successfully' });
        }
        return res.status(400).json({ message: 'Mail does not exist' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deleteMail = deleteMail;
const contactUs = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { name, surName, email, message } = req.body;
    console.log(req.body, '[---------------Req Body-----------------]');
    try {
        const newMail = yield (0, mailing_1.sendMailFromContact)({
            name,
            surName,
            email,
            message,
        });
        console.log(newMail, '[---------------New Mail-----------------]');
        const newContact = yield contact_1.default.create({ name, surName, email, message });
        res.status(201).json({
            msg: `Thank you ${name} ${surName} for contacting us! We will get back to you as soon as posible.`,
        });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.contactUs = contactUs;
//# sourceMappingURL=mail.controller.js.map