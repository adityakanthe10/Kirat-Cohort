// write a function to create a users table in your database.

import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "mysecretpassword",
});

const createUsersTable = async (): Promise<void> => {
  try {
    // Connect to the database
    await client.connect();
    console.log("Connected to the database");

    // SQL query to create the users table
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `);

    console.log("Table 'users' created successfully:", result.command);
  } catch (error) {
    console.error("Error creating 'users' table:", error);
  } finally {
    // Disconnect from the database
    await client.end();
    console.log("Disconnected from the database");
  }
};

// Call the function to create the table
createUsersTable();
