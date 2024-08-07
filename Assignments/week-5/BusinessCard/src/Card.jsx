export default function Card({description,interest1,interest2,interest3}){

    return(
        <>
        <h1 className = "name">{description} </h1>
        <p className="description"> A student in 100xDevs Cohort 2.0 </p>
    
        <h2>Interests</h2> 
        <p className="interest1">Ionic</p>
        <p className = "interest2">Open Source</p>
        <p className = "interest3">App Dev</p>
    
        <button className = "Linkedin">Linkedin</button>
        <button className="Twitter">Twitter</button>
        </>
    )
}