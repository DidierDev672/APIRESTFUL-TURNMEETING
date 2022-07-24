"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? parseInt(process.env.PORT, 1) : 3000;
const hostname = 'localhost';
app.listen(port, hostname, function () {
    console.log(`🚀 [server]: Server is running at running at https://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EDDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
//# sourceMappingURL=index.js.map