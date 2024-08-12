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