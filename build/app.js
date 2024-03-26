"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const mail_1 = tslib_1.__importDefault(require("./routes/mail"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: 'https://e-students.netlify.app',
    credentials: true,
}));
app.use(express_1.default.json());
app.use('/', mail_1.default);
app.get('/helper', (_req, res) => {
    res.send('Road to success is always under construction!');
});
exports.default = app;
//# sourceMappingURL=app.js.map