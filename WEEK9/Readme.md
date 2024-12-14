# WEEK 9

## WEEK 9.1 Custom Hooks

- Hooks - 

    -  Hooks are a feature introduced in React16.8 that allow you to use state and other React features without writing a class.They are functions that let you "hook into" React state and lifecycle features from function components.

- Custom Hooks - 

    -   Hooks that you create yourself, so other people can use them are called custom hooks.
    -   A custom hook is effectively a function, but with the following properties - 
        1. Uses another hook internally (useState,useEffect,another custom hooks)
        2. Starts with use .

    - A few examples are 
        1. Data fetching hooks .
        2. Browser functionality related hooks - useOnlineStatus,useWindowSize,useMousePosition .
        4. Performance/Timer based - useInterval,useDebounce .

## WEEK 9.2 Typescript

- Typescript is a programming language developed and maintain by microsoft.
- It is a strict syntactically superset of javascript and adds optional static typing to the language.

- Javascript is the runtime language (the thing that actually runs in the browser/nodejs runtime)
- Typescript is something that compiles down to javascript.
- When typescript is compiled down  to javascript ,you get type checking(similar to c++).If there is an error, the conversion to javascript fails.

- tsc is the official typescript comiler that you can use to convert typescript code into javascript.

- To assgin a type to the object , u can use interfaces.

- Interfaces can be implemented as classes.

- Main thing of using typescript is to make things strict and find the compile errors.

- Type cannot be used to implement the classes.And are more difference between type and interfaces.
    1. Types allow union and intersection.