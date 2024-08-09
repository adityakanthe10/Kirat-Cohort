import Card from "./Card"
// import {data} from "./index.js"
export default function App(){

  // const item = data[0];

const data = [
    {
      id: 1,
      name:"lokeshwar",
      description: " A student in 100xDevs Cohort2.0 ",
      interest1: "Ionic",
      interest2: "Open Source",
      interest3: "App Dev",
   },
  ];
  

  return (
    
    <div>
      <Card name ={data[0].name} description={data[0].description} interest1={data[0].interest1} interest2={data[0].interest2} interest3 = {data[0].interest3}/>
    </div>
  )
}