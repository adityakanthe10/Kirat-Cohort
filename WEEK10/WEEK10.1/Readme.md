<!-- 1:12:22 -->

# Week 10.1 Postgres

1. NoSQL Databases
- Store data in a schema-less fashion. Extremely lean and fast way to store data .
- E.g. MongoDB

2. Graph Databases
- Data is stored in the form of a graph. Specially used where the relationships need to be stored . 
- E.g. Neo4j

3. Vector Databases
-  Text -> Embedding Model -> Object as vectors -> Vector Databases
- E.g. AI Applications 

4. SQL Databases
- Stores data in the form of rows .
- E.g. MySQL,Postgres


## SQL DATABASES

- SQL Databases have a strict schema. They require you to 
    1. Define your schema .
    2. Put in data that follows that schema .
    3. Update the schema as your app changes and perform migrations .

- So there are 4 parts when using an SQL database (not connecting to Node.js, just runninğit and putting data in it)
    1. Running the database .
    2. Using a library that let's you connect and put data in it.
    3. Creating a table and defining it's schema.
    4. Run queries on the database to interact with the data (Insert/Update/Delete).
