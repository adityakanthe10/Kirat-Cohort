# WEEK 6

## WEEK 6.1 React Deeper Dive
(React returns,re-rendering,key,wrapper components,useEffect,useMemo,useCallback,useRef)

- A component can only return a single top level xml . Because it makes easy for reconcliation .

- Re-Render -
  -  Why do we need react - Cause react lets use create dynamic websites easily.
    - Rule of thumb is minimize re-render.
  - re-render in  react means that react did some work to calculate what all should update in this component. 
  - re-render happens when 
      1. A state variable that is being used inside a component changes .
      2. A parent component re-render triggers all children re-rendering .
      3. memo lets you skip re-rendering a component when its props are unchanged .

- Spread Operator (...) -
  - The Javascript spread opertor(...) allows us to quickly copy all or part of an existing array or object into another array or object.
  - The spread operator is often used in combination with destructuring.
  - We can use spread operators with objects too.

- Key
        - React uses your keys to know what happened if you later insert,delete,or reorder the items.

- Wrapper Components.
        
- Hooks 
        -Hooks in React are functions that allow you to "hook into" React state and lifecycle features from function components.

## WEEK 6.2 useEffect,useMemo,useCallback
(useEffect ,useCallback,useMemo,custom hooks,Prop Drilling)

1. Side effects -
               In react , the concept of side effects encompasses any operations that reach outside the functional scope of a react component. These operations can affect other components, interact with the browser, or perform asunchronous data fetching.

2. Hooks -      (Introduced in 16.8)
               Hooks enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components. This has led to a more concise and readable way of writing components in react . 
                common hooks ,useState,useEffect,useCallback,useMemo,useRef,useContext .

- useEffect - 
The useEffect hook in React.js is used to perform side effects in functional components. Side effects are operations that interact with the outside world (e.g., data fetching, subscriptions, or manually changing the DOM), and are usually run after the component renders.

  - Basic Usage:

    useEffect(() => { ... }); : Runs after every render.

    useEffect(() => { ... }, [ ]); : Runs only once after the initial render (similar to componentDidMount).

    useEffect(() => { ... }, [dependencies]); : Runs after the initial render and whenever any value in the dependencies array changes.

- useMemo - It means remembering some output given an input and not computing it again.

    - The useMemo hook in React.js is used to optimize performance by memoizing the result of a computation. It helps avoid expensive calculations on every render by caching the result of a function based on its dependencies.

    - Basic Usage:

      useMemo(() => computeSomething(), [dependencies]); : The function computeSomething will only re-run when one of the dependencies changes. If the dependencies haven't changed, useMemo returns the cached result from the previous render.

      Expensive Calculations: Use useMemo when you have a calculation or operation that is computationally expensive and doesn't need to re-run on every render.

      Optimizing Components: It's particularly useful for optimizing performance in components that rely on heavy computations or when passing computed values as props to child components.

- useCallback -
 