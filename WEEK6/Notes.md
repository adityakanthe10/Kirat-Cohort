# WEEK 6

## WEEK 6.1 React Deeper Dive
(React returns,re-rendering,key,wrapper components,useEffect,useMemo,useCallback,useRef)

- A component can only return a single top level xml . Because it makes easy for reconcliation .

- Re-Render
        - Why do we need react - Cause react lets use create dynamic websites easily. 
        - Rule of thumb is minimize re-render.
        - re-render in  react means that react did some work to calculate what all should update in this component. 
        - re-render happens when 
            1. A state variable that is being used inside a component changes .
            2. A parent component re-render triggers all children re-rendering .
        - memo lets you skip re-rendering a component when its props are unchanged .

- Spread Operator (...)
        - The Javascript spread opertor(...) allows us to quickly copy all or part of an existing array or object into another array or object.
        - The spread operator is often used in combination with destructuring.
        - We can use spread operators with objects too.

- Key
        - React uses your keys to know what happened if you later insert,delete,or reorder the items.

- Wrapper Components.
        
- Hooks 
        -Hooks in React are functions that allow you to "hook into" React state and lifecycle features from function components.