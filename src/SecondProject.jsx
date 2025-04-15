import React from "react";
const name = "Fatima Khan";
 const Year = new Date().getFullYear();
function SecondProject(){
  return (
    <div>
      <h1>My Second React App</h1>
      <p>This is a simple React application.</p>
      <p>Application is created by: {name}</p>
      <p>Copyright {Year}</p>
    </div>
  )
}
export default SecondProject;