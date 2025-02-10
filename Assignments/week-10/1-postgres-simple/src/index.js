"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// import { Client } from "pg";
var pg_1 = require("pg");
var config_1 = require("./config");
exports.client = new pg_1.Client({
    connectionString: config_1.DB_URL,
    ssl: { rejectUnauthorized: false },
    idle_in_transaction_session_timeout: 30000,
});
