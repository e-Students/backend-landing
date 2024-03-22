"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const db_1 = require("./db");
require("dotenv/config");
const port = process.env.PORT || 4000;
app_1.default.listen(port, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is running on port ${port}`);
    yield (0, db_1.connectDB)();
}));
//# sourceMappingURL=index.js.map