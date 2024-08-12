import {useState} from "react"

const App = () => {
  
  
  
  return (
   <div>
    <HeaderWithButton />
   <Header title="Raman" />
   <Header title="Raman" />

   </div>
  )
}

function HeaderWithButton(){
  const[count,setCount] = useState("harkirat");
  
  function randomNum(){
    setCount(Math.random())
  }
  return(
<>
<button onClick={randomNum}>Click me to change the title</button>
<Header title={count} />
</>
  )
}

function Header({title}){
  return(
    <h1>My name is {title}</h1>
  )
}




export default App