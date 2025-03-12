# SQL, Relationships And Joins

1.  Psql is a terminal-based front-end to PostgreSQL.It provides an interactive CLI interface to the postgreSQL database.With SQL, you can type in queries interactively,issue them to postgresql and see the result.

2. pg is a Node.js library that you can use in your backend app to store data in the PostgreSQL DB(similar to mongoose) .

3. 4 main parts while running a SQL database
    1. Running the database
    2. Using a library that's let you connect and put data into it.
    3. Creating a table and defining it's schema.
    4. Run queries on the database to interact with the data(Insert/Update/delete)

## RELATIONSHIPS AND TRANSACTIONS

- Relationship is easy but joining  data from two(or more) tables together is more difficult.

- Benefits of using a Join
1. Reduced Latency
2. Simplified Application Logic
3. Transactional Integrity

## Types Of Join

1. INNER JOIN
- Returns rows when there is at least one match in both sides. If there is no match then ,the rows are not returned.It's the most common type of join. 
Use Case -> Find all Users with their addresses. If a user hasn't filled their address,that user shouldn't be returned.

2. LEFT JOIN
- Returns all rows from the left table, and the matched rows from the right table.
Use case - To list all users from your database along with their address information (if they've provided it), you'd use a LEFT JOIN. Users without an address will still appear in your query result, but the address fields will be NULL for them.

3. RIGHT JOIN
- Returns all rows from the right table, and the matched rows from the left table .
Use case - Given the structure of the database, a RIGHT JOIN would be less common since the addresses table is unlikely to have entries not linked to a user due to the foreign key constraint. However, if you had a situation where you start with the addresses table and optionally include user information, this would be the theoretical use case.

4. FULL JOIN
- Returns rows when there is a match in one of the tables.It effectively combines the results of both LEFT JOIN and RIGHT JOIN.
Use case - A FULL JOIN would combine all records from both users and addresses, showing the relationship where it exists. Given the constraints, this might not be as relevant because every address should be linked to a user, but if there were somehow orphaned records on either side, this query would reveal them.