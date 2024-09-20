import {useState,useContext} from "react"
import {CountContext} from "./context"

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
      <Count  />
      </CountContext.Provider>
    </div>
  )
}

function Count(){
return <div>
  <CountRenderer />
  <Buttons  />
</div>
}

function CountRenderer(){
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count,setCount} = useContext(CountContext)
return <div>
  <button onClick={() =>{
    setCount(count + 1)
  }}>Increase</button>

  <button onClick={()=>{
    setCount(count -1) //Decrement count
  }}>
    Decrease
  </button>
</div>
}

export default  App;

