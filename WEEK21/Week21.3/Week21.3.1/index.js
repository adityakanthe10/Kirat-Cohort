"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openapispec_1 = require("./openapispec");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];
app.get("/users", (req, res) => {
    const { name } = req.query;
    if (name) {
        const filteredUsers = users.filter((user) => 
        //@ts-ignore
        user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    }
    else {
        res.json(users);
    }
});
app.post("/users", (req, res) => {
    const { name } = req.query;
    if (name) {
        const filteredUsers = users.filter((user) => 
        //@ts-ignore
        user.name.toLowerCase().includes(name.toLowerCase()));
        res.json(filteredUsers);
    }
    else {
        res.json(users);
    }
});
app.use("/documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapispec_1.openApiSpec));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
