// import React from 'react'
import {useState} from "react"
import {CreateTodo } from "./Components/CreateTodo" 
import {Todos} from "./Components/Todos" 

const App = () => {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App