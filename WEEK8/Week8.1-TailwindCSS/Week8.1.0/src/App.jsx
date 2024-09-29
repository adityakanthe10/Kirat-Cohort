// import React from 'react'
import "./index.css"

const App = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <div style={{backgroundColor:"red"}}>hi</div>
    <div style={{backgroundColor:"yellow"}}>hi</div>
    <div style={{backgroundColor:"green"}}>hi</div>
    </div>

    <div className="flex justify-between">
    <div className>hi</div>
    <div style={{backgroundColor:"yellow"}}>hi</div>
    <div className>hi</div>
    </div>
    </>
  )
}

export default App