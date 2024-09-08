// ## Create an app that does two things

// 1. Increases a counter by 1.
// 2. Lets user put a value in an input box(n) and you need to show sum from 1-n.

// - One restriction everything needs to be inside App.

import {useState,
  // useEffect,
  useMemo} from "react"

function App(){

  const [counter,setCounter] = useState(0)
  const [inputValue,setInputValue] = useState(1)
  // const [count,setCount] = useState(0)

  let Count = 0;
  for(let i=0;i<=inputValue;i++){
    Count =Count+i;
  }

  // useEffect
  // useEffect(()=>{
  //   let finalCount =0;
  //   for(let i=1;i<= inputValue;i++){
  //     finalCount =finalCount +1;
  //   }
  //   setCount(finalCount)
  // },[inputValue])
  
  // useMemo
  let count = useMemo(()=>{
    let finalCount =0;
    for(let i=1;i<= inputValue;i++){
      finalCount =finalCount +1;
    }
    return finalCount
  },[inputValue])


  return (
    <div>

<input onChange={function(e){
  setInputValue(e.target.value);
}} placeholder={"Find sum from 1 to n"}></input>
<br />
Sum from 1 to {inputValue} is {Count}
<br/>

      <button onClick={() =>{
        setCounter(counter+1);
      }}>Counter ({counter})</button>
    </div>
)
}

export default App 