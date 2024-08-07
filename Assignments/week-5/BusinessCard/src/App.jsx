import Card from "./Card"
import {data} from "./index.js"
export default function App({data}){
  return (
    <div>
      <Card  description={data.description} interest1={data.interest1} interest2={data.interest2} interset3 = {data.interest3}/>
    </div>
  )
}