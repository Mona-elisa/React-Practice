import React from "react";
const currentDate = new Date();
 const currentTime= currentDate.getHours();
 const headingStyle={
  color: "",
  
 }

 let greeting;
 if(currentTime < 12){
  greeting="good morning"
  headingStyle.color="green";
 }
 else if(currentTime > 12){
  greeting="good afternoon"
  headingStyle.color="blue";
 }
 else{
  greeting="good night"
  headingStyle.color="red";
 }
 

function FifthProject(){
  return(
    <div>
      <h1>My Fifth React App</h1>
      <h1 className="heading1" style={headingStyle}>{greeting}</h1>
    </div>

  )
}
export default FifthProject;