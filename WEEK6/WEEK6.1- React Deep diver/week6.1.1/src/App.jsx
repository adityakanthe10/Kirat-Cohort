import React,{useState} from 'react'

let counter = 3;

const App = () => {
  const [todos,setTodos] = useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },
  {
    id:2,
    title:"go to gym",
    description:"go to gym today"
  },{
    id:3,
    title:"go to gym",
    description:"go to gym today"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:"study dsa",
      description:"study DSA"
    }]);
  }
  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description ={todo.description}/>)}
    </>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
    </div>
}
export default App