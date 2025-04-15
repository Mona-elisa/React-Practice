import React from "react";
const img="https://picsum.photos/200";
function FourthProject(){
  return(
    <div>
  <h1>My Fourth React App</h1>
  <a href="https://www.google.com" accessKey='g' title='google website'><img src={img + "?grayscale"} alt=""/></a>
</div>
  )
}
export default FourthProject;