// import { Client } from "pg";
import { Client } from "pg";
import { DB_URL } from "./config";

export const client = new Client({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
  idle_in_transaction_session_timeout: 30000,
});
