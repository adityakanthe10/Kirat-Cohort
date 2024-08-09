import "./Card.css"

export default function Card({name,description,interest1,interest2,interest3}){

    
    return(
        <div className="card">
        <h1 className = "name">{name}</h1>
        <p className="description"> {description} </p>
    
        <h2>Interests</h2> 
        <p className="interest1">{interest1}</p>
        <p className = "interest2">{interest2}</p>
        <p className = "interest3">{interest3}</p>
    
        <button className= "linkedin">Linkedin</button>
        <button className="twitter">Twitter</button>
        </div>
    )
}