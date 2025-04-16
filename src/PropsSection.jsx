import react from "react";
function PropSection(prop){
  return(
    <div>
      <h1> {prop.name} </h1>
      <p> {prop.email} </p>
      <p> {prop.phone} </p>
      <p> {prop.address} </p>
      <p> {prop.age} </p>

    </div>
  )
}

export default PropSection;