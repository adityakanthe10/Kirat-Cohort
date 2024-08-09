import Card from "./Card"
import {data} from "./index.js"
import "./App.css"

export default function App(){

  return (
    
    <div className="main">
      {/* <h1>adity</h1> */}
      {data.map((item)=>(
        <Card key={item.id} name={item.name} description = {item.description} interest1={item.interest1} interest2={item.interest2} interest3= {item.interest3} />
      ))}
    </div>
  )
}