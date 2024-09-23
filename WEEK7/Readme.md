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
        
            - function Button() {const theme = useContext(ThemeContext); }// ..

## WEEK 7.2 Context,State Management,recoil 

- Context
(Doesn't fix re-rendering , only fixes prop drilling )
    - More strictier state management would come that would  take away the problem of whoever is not using the state variable does not re-render only the component that are using the state variable re-render .(state management libraries let us do this)
    - We use context api to make syntax cleaner and get rid of context api.

 - State Management using Recoil 
    - A cleaner way to store the state of your app.
    - Until now, the cleanest thing you cna do is use the Context API.
    - It lets you teleport state.
    - But there are better solutions that get rid of the problems that context api has (unnecessary re-renders)

- Recoil (A State Management Library) 
    
    - Has a concept of an atom to store the state .
    - An atom can be defined outside the component .
    - Can be teloperted to any component . 

    - ( RecoilRoot,atom,useRecoilState,useRecoilValue,useSetRecoilState,selector)
        - Recoil gave access to 3 hooks
        1. useRecoilState - Exactly similar to useState .A. two things current value and update the  value
        2. useRecoilValue - which gives just tht value.
        3. useSetRecoilValue - gives only want to update the value .

    - A selector represents a piece of derived state.You can think of derived state as the output of passing state of a pure function that derives a new value from the said state.  

## WEEK 7.3 Recoil Deep Dive

- useSetRecoilState

- atoms

- Selector - Selector is derived from the other atoms.

- asynchronous data queries.

- atom family

        import {atomFamily} from "recoil"
        
        const TODOS = [{
        id: 1,
         title: "Go to Gym",
        description: "Hit the gym from 7-9"
        }, {
        id: 2,
        title: "Go to eat food",
        description: "Eat food from from 9-11"
        },]

        export const todosAtomFamily = atomFamily({
        key: 'todosAtomFamily',
        default: id => {
        return TODOS.find(x => x.id === id)
        },
        });

- selector family 

- Loadables