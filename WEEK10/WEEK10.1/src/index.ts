// 1.Connecting to the database and adding the credentials
import { Client } from "pg";

const createClient = () =>
  new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "mysecretpassword",
  });

// write a function to create a users table in your database.
const createUsersTable = async (): Promise<void> => {
  const client = createClient();
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

//Call the function to create the table
createUsersTable();

// Write a function getUser that lets you fetch data from the database given a email as input.

const getUsers = async (username: string, email: string, password: string) => {
  const client = createClient();
  try {
    await client.connect();
    const insertQuery =
      " INSERT INTO users (username,email,password) VALUES($1,$2,$3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log(`insertion successful ` + res);
  } catch (error) {
    console.log(`Error during the insertion ` + error);
  } finally {
    await client.end();
  }
};

getUsers("abhijeet", "abhijeetkanthr12@gmail.com", "Abhijeet@1234");
