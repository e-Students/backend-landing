"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const mailSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
});
exports.default = mongoose_1.default.model('Mail', mailSchema);
//# sourceMappingURL=mail.js.map