import { client } from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  // await client.connect();
  // await client.query(`
  //   CREATE TABLE IF NOT EXISTS users(
  //   id SERIAL PRIMARY KEY,
  //   username VARCHAR(255) UNIQUE NOT NULL,
  //   password VARCHAR(255) NOT NULL,
  //   name VARCHAR(255) NOT NULL
  //   )
  //   `);
  // console.log("Table created successfully");

  // const existingUser = await client.query(
  //   `SELECT * FROM users WHERE  username = $1`
  // );

  //   Insert Data into the table
  const result = await client.query(
    `INSERT into users(username,password,name) VALUES ($1,$2,$3) RETURNING *`,
    [username, password, name]
  );
  return result.rows[0];

  // console.log("User created:", result.rows[0]);
  // await client.end();
}
// createUser("aditya", "Aditya@1234", "ADITYA");

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  //   await client.connect();
  const getedUsers = await client.query(
    `
     SELECT * FROM users
     WHERE id = $1
     `,
    [userId]
  );
  return getedUsers.rows[0];
  // console.log("response", res);
}

// getUser(1);
