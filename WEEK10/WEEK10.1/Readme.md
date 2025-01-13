# WEEK 10.1 Postgres,Prisma

- We might think that mongoose does add strictness to the codebase because we used to define schema there.
- That strictness is present at the Node.js level, not at the DB level. You can still put in erroneous data in the database that doesn't follow that schema.

## WHY SQL?

### SQL Database have a strict schema. They require you to 

1. Define your schema.
2. Put in data that follows that schema.
3. Update your schema as your app changes and perform migrations.

- So there are 4 parts when using an SQL database (not connecting it to Node.js, just running it and putting data in it)
1. Running the database.
2. Using a library that let’s you connect and put data in it.
3. Creating a table and defining it’s schema.
4. Run queries on the database to interact with the data (Insert/Update/Delete)
 
 - pg is a Node.js library that you can use in your backend app to store the data in the Postgres DB (similar to mongoose)