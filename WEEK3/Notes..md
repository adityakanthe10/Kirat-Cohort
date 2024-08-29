# WEEK 3

## Week 3.1 Middlewares, authentication, global catches and zod .

- Two prechecks that a real websites does are 
1. Authentication.
2. Input Validations.

- Global catches are used for exceptions.It helps you give the user a Better Error Message. Has Four arguments (err,req,res,next) .

- ZOD is a schema validation .

## Week 3.2 Databases and Auth .

- Created a Fetch API

## Authentication

Project For Today 
- Let People sign up to your websites and only allow signed in users to see people (Create a dummy people list)

Cryptography jargon .
1. Hashing - It's Only one way you cannot convert it back into string .Given the output,no one can find out the input .Changing the input a lil bit changes the output by a lot .

2. Encryption -  Its Two way .A String is encrypted using a password. String can be decrypted using the same password .

3. Json web tokens - Its neither of encryption or hashing .Anyone can see the original output given the signature .Signature can be verified only using password .

   It only works for JSON inputs.It takes JSON data . Some input converted into output and whoever has output can change into input.

4. Local Storage - A place in your browser where you can store some data . Usually things that are stored include - 

    1. Authentication tokens . 
    2. User Language Preference .
    3. User Theme Preference . 

  ## Databases

- In the real world , a basic architecture looks like this 
   - User hits the backend -> The Backend hits the Databases -> User doesn't have access to the database .

- Various types of Databases - Graph,Vector,SQL,NoSQL.

### MongoDB (NoSQL)

- Lets you create databases .
- Each DB ,it lets you create tables(collections) .
- In each table, it lets you dump JSON data.
- It is Schemaless .
- It scales well and is a decent choice for most use cases .

## Week 3.3 Authentication,JWTs and try/catch 

- Three things when creating JWT

1. Generating the JWT .(sign)
2. Decoding the JWT .
3. Verify the JWT .

-  TRY AND CATCH
  - When an exception is raised the process exits since the JS Program doesn't want to proceed anymore, but you might want the program to still continue ,that is when u use try catch.

  ## Week 3.4 Middleware Recap and Assignments 

  - Express is a routing and middleware web framework that has minimal functionality of its own . An Express Application is essentially a series of middleware function calls .

  - Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the applications request-response cycle. The next middleware function is commonly denoted by a variable named next .

  - Middleware functions can perform the following tasks :

  1. Execute any code . 
  2. Make changes to the request and response object .
  3. End the request-response cycle . 
  4. Call the next middleware function in the stack . 

  