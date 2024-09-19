# WEEK 7

## WEEK 7.1 Routing,Prop Drilling, Context API

- React Router

- useNavigate can only be used inside BrowserRouter.

- lazyloading

- Prop Drilling - 

    -  Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
    -  But passing props can become verbose and inconvenient when you need to pass some prop deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called “prop drilling”.

- Context Hooks 
    - Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

    - useContext reads and subscribes to a context.
        
            - function Button() {const theme = useContext(ThemeContext);// ..