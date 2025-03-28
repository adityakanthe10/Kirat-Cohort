"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let requestCount = 0;
app.use(function middleware(req, res, next) {
    requestCount++;
    next();
});
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.get("/requestCount", (req, res) => {
    res.json({
        requestCount,
    });
});
app.listen(3000);
