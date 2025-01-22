# WEEK 10

## WEEK 10.1 Postgres

### Types of Databases

 - NoSQL databases - 

    1. Store data in a schema-less fashion. Extremely lean and fast way to store data.
    2. Examples - MongoDB

- Graph databases -

    1. Data is stored in the form of a graph. Specially useful in cases where relationships need to be stored (social networks)
    2. Examples - Neo4j

- Vector databases - 

    1. Stores data in the form of vectors
    2. Useful in Machine learning
    3. Examples - Pinecone

- SQL databases - 

    1. Stores data in the form of rows
    2. Most full stack applications will use this
    3. Examples - MySQL, Postgres

### Why not NoSQL

- It’s schemaless properties make it ideal to for bootstraping a project fast.
But as your app grows, this property makes it very easy for data to get <b>curropted</b> .
    - What is schemaless? 
        - Different rows can have different schema (keys/types) .

- Problems?
    - Can lead to inconsistent database .
    - Can cause runtime errors .
    - Is too flexible for an app that needs strictness .

- Upsides?
    - Can move very fast
    - Can change schema very easily

### Why SQL?

-  SQL databases have a strict schema. They require you to
    1. Define your schema
    2. Put in data that follows that schema
    3. Update the schema as your app changes and perform migrations
 
- So there are 4 parts when using an SQL database <br> 
(not connecting it to Node.js, just running it and putting data in it)
    1.  Running the database.
    2. Using a library that let’s you connect and put data in it.
    3. Creating a table and defining it’s schema.
    4. Run queries on the database to interact with the data (Insert/Update/Delete)

###  Using a library that let’s you connect and put data in it.

1. <b>psql</b>
    - psql is a terminal-based front-end to PostgreSQL. It provides an interactive command-line interface to the PostgreSQL (or TimescaleDB) database. With psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results.

    ```bash 
    psql -h p-broken-frost-69135494.us-east-2.aws.neon.tech -d database1 -U 100xdevs
    ```

2. <b>pg</b>
    - pg is a Node.js library that you can use in your backend app to store data in the Postgres DB (similar to mongoose). We will be installing this eventually in our app.

### Tables in SQL
- A single database can have multiple tables inside. Think of them as collections in  a MongoDB database.

- Until now, we have a database that we can interact with. The next step in case of postgres is to define the schema of your tables.
SQL stands for Structured query language. It is a language in which you can describe what/how you want to put data in the database.
To create a table, the command to run is - 
    ``` CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
    ```
- There are a few parts of this SQL statement, let’s decode them one by one

1.  <b>CREATE TABLE users</b><br>
CREATE TABLE users: This command initiates the creation of a new table in the database named users.

2.  <b> id SERIAL PRIMARY KEY</b> <br>

- id: The name of the first column in the users table, typically used as a unique identifier for each row (user). Similar to _id in mongodb
- SERIAL: A PostgreSQL-specific data type for creating an auto-incrementing integer. Every time a new row is inserted, this value automatically increments, ensuring each user has a unique id.
- PRIMARY KEY: This constraint specifies that the id column is the primary key for the table, meaning it uniquely identifies each row. Values in this column must be unique and not null.

3. <b> email VARCHAR(255) UNIQUE NOT NULL</b>,
- email: The name of the second column, intended to store the user's username.
- VARCHAR(50): A variable character string data type that can store up to 50 characters. It's used here to limit the length of the username.
- UNIQUE: This constraint ensures that all values in the username column are unique across the table. No two users can have the same username.

4. <b>password VARCHAR(255) NOT NULL</b>
- Same as above, can be non unique

5. <b>created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP</b><br>
- created_at: The name of the fifth column, intended to store the timestamp when the user was created.
- TIMESTAMP WITH TIME ZONE: This data type stores both a timestamp and a time zone, allowing for the precise tracking of when an event occurred, regardless of the user's or server's time zone.
- DEFAULT CURRENT_TIMESTAMP: This default value automatically sets the created_at column to the date and time at which the row is inserted into the table, using the current timestamp of the database server.

### How to do queries from a Node.js app?

In the end, postgres exposes a protocol that someone needs to talk to be able to send these commands (update, delete) to the database.
psql  is one such library that takes commands from your terminal and sends it over to the database.
To do the same in a Node.js , you can use one of many Postgres clients 

- pg library<br>
https://www.npmjs.com/package/pg<br>
Non-blocking PostgreSQL client for Node.js.<br>
Documentation - https://node-postgres.com/

- Connecting -

```bash
 import { Client } from 'pg'
 
const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
  user: 'database-user',
  password: 'secretpassword!!',
})

client.connect()
```

- Querying 

``` bash
const result = await client.query('SELECT * FROM USERS;')
console.log(result)
```

// write a function to create a users table in your database.

```bash
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();
``` 

### Creating a simple Node.js app

1. Initialise an empty typescript project

```bash 
npm init -y
npx tsc --init
```

2. Change the rootDir and outDir in tsconfig.json

```bash
"rootDir": "./src",
"outDir": "./dist",
```

3. Install the pg library and it’s types (because we’re using TS)
```bash
npm install pg
npm install @types/pg
```

1. Create a simple Node.js app that lets you put data - 
- Create a function that let’s you insert data into a table. Make it async, make sure client.connect resolves before u do the insert.

- More secure way to store data.
Update the code so you don’t put user provided fields in the SQL string.

    1. Query data - <br> 
    Write a function getUser that lets you fetch data from the database given a email as input.

    ```bash
    import { Client } from 'pg';

    // Async function to fetch user data from the database given an email
    async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });
    

    try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
     } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
     } finally {
    await client.end(); // Close the client connection
     }
    }

    // Example usage
    getUser('user5@example.com').catch(console.error);

    ```

### Relationships and Transactions

- Relationships let you store data in different tables and relate it with each other.

1. **Relationships in SQL** -
- Since SQL cannot store object as such, we need to define to different tables two store this data in it.

When defining the table, u need to define the relationship

```bash 
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```
**SQL query**

To insert a address of the user - 

```bash 
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
```

Now if you want to get the address of a user given an id , you can run the following query - 

```bash
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
```

### Joins

Defining relationships is easy.<br>
What's hard is joining data from two(or more) tables together.
<br>For e.g, If I ask you to fetch me a users details and their address ,what SQL would you run

```bash 
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';
```

```bash
SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;
```

- Now try converting the same to your node app

```bash
import { Client } from 'pg';

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();
        const query = `
            SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1
        `;
        const result = await client.query(query, [userId]);

        if (result.rows.length > 0) {
            console.log('User and address found:', result.rows[0]);
            return result.rows[0];
        } else {
            console.log('No user or address found with the given ID.');
            return null;
        }
    } catch (err) {
        console.error('Error during fetching user and address:', err);
        throw err;
    } finally {
        await client.end();
    }
}
getUserDetailsWithAddress("1");
```

### Benefits of using a join - 
- Reduced Latency
- Simplified Application Logic
- Transactional Integrity
 

**Types of Joins**
1. INNER JOIN
- Returns rows when there is at least one match in both tables. If there is no match, the rows are not returned. It's the most common type of join.
- Use Case: Find All Users With Their Addresses. If a user hasn’t filled their address, that user shouldn’t be returned

```bash 
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
```

2. LEFT JOIN
Returns all rows from the left table, and the matched rows from the right table.
Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

```bash
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
```

 RIGHT JOIN
Returns all rows from the right table, and the matched rows from the left table.
Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.

```bash
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
```

4. FULL JOIN
Returns rows when there is a match in one of the tables. It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.

```
SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
```