
1. Languages are used to write applications.
2. Developers write high level code in these languages.
3. Every language has a compiler which converts the developer code into 01 .

Compiled Languages
- First need to compile,then need to run.
- Usually don't compile if there is an error in the code .
- example - java,c++,rust

Interpreted Languages 
- Usually go line by line
- Can run partially if the error comes later.
- eg - Javascript,python.


For most websites Javascript is primary language used to create websites.

## Week 1.4

A function in Javascript is a set of statements that performs a task or calculates a value.

## Week 1.5 

- Async vs Sync Functions,real use of callbacks ,JS Browser Architecture , Promises, Async and Await

- Common async functions
    - setTimeout,fs.readFile,Fetch

- Promises
    - Promises are syntactical(pretty way) that makes code slightly more readable
    - It is just a wrapper on top of another async function ,which is fine.
    - Usually all async functions you will write will be on the top of JS provided async functions like setTimeout or fs.readfile.

    - Whenever u create a promise, you need to pass in a function as the first argument which has resolve as the First argument.
