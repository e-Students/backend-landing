"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
require("dotenv/config");
const connectDB = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URI); // MONGO_URI is the connection string
        console.log('MongoDB connected');
    }
    catch (error) {
        console.log('MongoDB connection failed');
    }
});
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map