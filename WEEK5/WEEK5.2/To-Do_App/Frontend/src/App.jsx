// import React from 'react'

import {CreateTodo } from "./Components/CreateTodo" 
import {Todos} from "./Components/Todos" 

const App = () => {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  )
}

export default App