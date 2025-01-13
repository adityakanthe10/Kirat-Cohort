"use strict";
// write a function to create a users table in your database.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
});
const createUsersTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to the database
        yield client.connect();
        console.log("Connected to the database");
        // SQL query to create the users table
        const result = yield client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `);
        console.log("Table 'users' created successfully:", result.command);
    }
    catch (error) {
        console.error("Error creating 'users' table:", error);
    }
    finally {
        // Disconnect from the database
        yield client.end();
        console.log("Disconnected from the database");
    }
});
// Call the function to create the table
createUsersTable();
